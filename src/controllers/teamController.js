const Team = require("../models/Team");

exports.createTeam = async (req, res) => {
  const team = await Team.create({
    name: req.body.name,
    members: [req.user._id],
    createdBy: req.user._id
  });
  res.json(team);
};

exports.joinTeam = async (req, res) => {
  const team = await Team.findById(req.params.id);
  team.members.push(req.user._id);
  await team.save();
  res.json(team);
};