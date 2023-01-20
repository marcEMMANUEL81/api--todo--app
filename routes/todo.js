const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todo");

router.post("/register", todoController.createTodo);
router.get("/add", todoController.getAllTodo);
router.delete("/delete/:id", todoController.deleteTodo);

module.exports = router;