import { Todo } from "../../models/index.js";
import { showError } from "../../middlewares/index.js";
class TodoController {
  index = async (req, res, next) => {
    try {
      const todos = await Todo.find({ userId: req.user._id });
      res.json(todos);
    } catch (error) {
      showError(error, next);
    }
  };
  store = async (req, res, next) => {
    const { title, description } = req.body;

    try {
      await Todo.create({
        title,
        description,
        userId: req.user._id,
      });
      res.status(201).json({
        message: "One Todo added don't forget to complete it ",
      });
    } catch (error) {
      showError(error, next);
    }
  };
  show = async (req, res, next) => {
    const { id } = req.params;

    try {
      const todo = await Todo.find({ _id: id, userId: req.user._id });
      res.json(todo);
    } catch (error) {
      showError(error, next);
    }
  };
  update = async (req, res, next) => {
    const { id } = req.params;
    const { title, description, completed } = req.body;
    try {
      await Todo.findByIdAndUpdate(id, { title, description, completed });

      res.json({
        message: "todo item updated",
        status: 201,
      });
    } catch (error) {
      showError(error, next);
    }
  };
  destroy = async (req, res, next) => {
    try {
      await Todo.findByIdAndDelete(req.params.id);
      res.json({
        message: "Todo item deleted",
        status: 201,
      });
    } catch (error) {
      showError(error, next);
    }
  };
}

export default new TodoController();
