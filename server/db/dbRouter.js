const express = require("express");
const mongoRouter = express.Router();
const UserModel = require("../models/Users")
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

require('dotenv').config();

mongoRouter.use(express.json());

mongoRouter.post("/createUser", async (request, response) => {
    try {
        const hashedPassword = await bcrypt.hash(request.body.password, 10);

        let findUser = await UserModel.findOne({ email: request.body.email });
        if (findUser) {

            response.status(400).send({
                message: "Email already registered!"
            });
            return
        }

        const user = new UserModel({
            firstName: request.body.firstName,
            lastName: request.body.lastName,
            email: request.body.email,
            password: hashedPassword,
        });

        const result = await user.save();

        response.status(201).send({
            message: "User Created Successfully",
            result,
            id: user._id
        });

    } catch (error) {

        response.status(500).send({
            message: "Error creating user",
            error,
        });
    }
});

mongoRouter.get("/profile/:id", async (req, res) => {
    try {
        const result = await UserModel.find({ _id: req.params.id }).exec();
        res.json(result);
    } catch (err) {
        res.json(err);
    }
});

mongoRouter.get("/watchlist/:userId", async (req, res) => {
    try {
        const result = await UserModel.find({ _id: req.params.userId }).exec();
        res.json(result[0].watchList);
    } catch (err) {
        res.json(err);
    }
});

mongoRouter.put("/watchlist/remove/:userId/:id", async (req, res) => {
    try {
        const { id, userId } = req.params;
        const user = await UserModel.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const watchList = user.watchList;
        const index = watchList.findIndex(item => item.id === id);
        if (index === -1) {
            return res.status(404).json({ message: "Item not found in watchlist" });
        }
        watchList.splice(index, 1);
        await user.save();
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
});


mongoRouter.post("/watchlist/:mediaType/:id/:userId", async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.userId);
        user.watchList.push({ mediaType: req.body.mediaType, id: req.body.id });
        await user.save();
        res.json(user);
    } catch (err) {
        res.json(err);
    }
});

mongoRouter.post("/loginUser", async (request, response) => {
    try {
        const user = await UserModel.findOne({ email: request.body.email });

        if (user) {
            const passwordCheck = await bcrypt.compare(request.body.password, user.password);

            if (passwordCheck) {
                const token = jwt.sign(
                    {
                        userId: user._id,
                        userEmail: user.email,
                    },
                    "RANDOM-TOKEN",
                    { expiresIn: "24h" }
                );

                response.status(200).send({
                    message: "Login Successful",
                    email: user.email,
                    token,
                    id: user._id
                });
            } else {
                response.status(400).send({
                    message: "Passwords does not match"
                });
            }
        } else {
            response.status(404).send({
                message: "Email not found"
            });
        }
    } catch (error) {
        response.status(500).send({
            message: "Server error"
        });
    }
});


module.exports = mongoRouter;