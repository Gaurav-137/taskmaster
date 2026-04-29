const express = require("express");
const { createTeam, joinTeam } = require("../controllers/teamController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", protect, createTeam);
router.post("/:id/join", protect, joinTeam);

module.exports = router;