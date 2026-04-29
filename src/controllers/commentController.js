const Comment = require("../models/Comment");

exports.addComment = async (req, res) => {
  const comment = await Comment.create({
    task: req.params.taskId,
    user: req.user._id,
    text: req.body.text
  });
  res.json(comment);
};

exports.getComments = async (req, res) => {
  const comments = await Comment.find({ task: req.params.taskId });
  res.json(comments);
};