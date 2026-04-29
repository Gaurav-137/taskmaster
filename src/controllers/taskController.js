const Task = require("../models/Task");

exports.createTask = async (req, res) => {
  const task = await Task.create({
    ...req.body,
    assignedTo: req.user._id
  });
  res.json(task);
};

exports.getTasks = async (req, res) => {
  const { status, search } = req.query;

  let query = { assignedTo: req.user._id };

  if (status) query.status = status;
  if (search) query.title = { $regex: search, $options: "i" };

  const tasks = await Task.find(query);
  res.json(tasks);
};

exports.updateTask = async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(task);
};

exports.deleteTask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Task deleted" });
};