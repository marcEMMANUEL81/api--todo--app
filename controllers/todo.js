const Todo = require("../models/todo");

exports.createTodo = (req, res, next) => {
    const todo = new Todo({...req.body });
    todo
        .save()
        .then((todo) => res.status(201).json(todo))
        .catch((error) => res.status(400).json({ error }));
};

exports.deleteTodo = (req, res, next) => {
    console.log(req.params);
    Todo.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: "todo supprimé !" }))
        .catch((error) => res.status(400).json({ error: "Test error" }));
};

exports.getAllTodo = (req, res, next) => {
    Todo.find()
        .then((todos) => res.status(200).json({ todos }))
        .catch((error) => res.status(400).json({ error }));
};