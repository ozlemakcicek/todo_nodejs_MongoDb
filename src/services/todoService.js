import Todos from "../models/Todo.js";

export const getAll = async (req, res) => {
  try {
    // const { UserId } = req.body;
    const data = await Todos.find().exec();
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ message: "Todo can not finded..." });
    // res.status(500).json({ message: "Todo can not created..."})
  }
};

export const get = async (req, res) => {
  try {
    const { userId } = req.body;
    const data = await Todos.find({userId:userId}).exec();
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ message: "Todo can not finded..." });
    // res.status(500).json({ message: "Todo can not created..."})
  }
};

export const add = async (req, res) => {
  // const todo = req.body;
  const { userId, todo } = req.body;
  const todos = { userId, todo };

  try {
    const data = await Todos.create(todos);
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ message: "Todo can not created..." });
    // res.status(500).json({ message: "Todo can not created..."})
  }
};

export const update = async (req, res) => {
  try {
    const todos = req.body;
    const data = await Todos.updateOne(
      { _id: todos.id },
      { $set: todos }
    ).exec();
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ message: "Todo can not updated..." });
    // res.status(500).json({ message: "Todo can not created..."})
  }
};

export const remove = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Todos.deleteOne({ _id: id }).exec();
    res.status(200).json(data);
  } catch (error) {
    return res.status(404).json({ message: "Todo could not delete..." });
  }
};
