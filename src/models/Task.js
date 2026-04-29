const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: {
    type: String,
    enum: ["open", "in-progress", "completed"],
    default: "open"
  },
  dueDate: Date,
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  team: { type: mongoose.Schema.Types.ObjectId, ref: "Team" }
}, { timestamps: true });

module.exports = mongoose.model("Task", taskSchema);