const express = require("express");
const router = express.Router();
const TaskController = require("../controllers/TaskController");

router.post("/", TaskController.create);
router.get("/getAll", TaskController.getAll);
router.get("/getById/:_id", TaskController.findById);
router.put("/completed/:_id", TaskController.completed);
router.put("/title/:_id", TaskController.changeTitle);
router.delete("/", TaskController.delete);

module.exports = router;
