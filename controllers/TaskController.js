const Task = require("../models/Task");

const TaskController = {
  async create(req, res) {
    try {
      const task = await Task.create(req.body);
      res.status(201).send({ message: "Task is created", task });
    } catch (error) {
      console.log(error);
      res.status(500);
    }
  },
  async getAll(req, res) {
    try {
      const tasks = await Task.find();
      req.status(200).send({ message: "Here you have all tasks, bruh", tasks });
    } catch (error) {
      console.error(error);
      req.status(500).send("Ouch you got a problem");
    }
  },
  async findById(req, res) {
    try {
      const task = await Task.findById(req.params._id);
      if (!task) {
        return res.status(404).send("Task not found");
      }
      res
        .status(200)
        .send({ message: "Here is the task found by the ID introduced", task });
    } catch (error) {
      console.error(error);
      req.status(500).send("Ouch you got a problem");
    }
  },
  async completed(req, res) {
    try {
      const task = await Task.findByIdAndUpdate(
        req.params._id,
        { completed: true },
        { new: true }
      );
      res.status(200).send({ message: "Yo have updated the task", task });
    } catch (error) {
      console.error(error);
      req.status(500).send("Ouch you got a problem");
    }
  },
  async changeTitle(req, res) {
    try {
      const task = await Task.findByIdAndUpdate(
        req.params._id,
        {
          title: req.body.title,
        },
        { new: true }
      );
    } catch (error) {
      console.error(error);
      req.status(500).send("Ouch you got a problem");
    }
  },

  async delete(req, res) {
    try {
      const task = await Task.findByIdAndDelete(req.params._id)
        .res.status(200)
        .send("Deleted task");
    } catch (error) {
      console.error(error);
      req.status(500).send("Ouch you got a problem");
    }
  },
};

module.exports = TaskController;
