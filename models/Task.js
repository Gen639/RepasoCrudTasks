const mongoose = require("mongoose");

const TaskModel = new mongoose.Schema(
  {
    title: String,
    completed: Boolean,
  },
  { timestamps: true }
);

const Task = mongoose.model("Task", TaskModel);
module.exports = Task;
