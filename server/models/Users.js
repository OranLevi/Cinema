const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        require: true,
    },
    lastName: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    watchList: [
        {
            id: {
                type: String,
                required: true
            },
            mediaType: {
                type: String,
                required: true
            }
        }
    ]

}, { collection: 'users' });

const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;
