const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const dbConnection = require("./config/config");

app.use("/tasks", require("./routes/tasks.js"));

app.use(express.json());

const PORT = process.env.PORT;
dbConnection();
app.listen(PORT, () =>
  console.log(`The server is up and running on port ${PORT}`)
);
