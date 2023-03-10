const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose")
const router = require('./routes');
const mongoRouter = require('./db/dbRouter');

require('dotenv').config();

const app = express();
app.use(cors());
app.use('/', router);
app.use('/', mongoRouter);

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGODB_URL)

app.listen(3001, () => {
  console.log("Server run")
});