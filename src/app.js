const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

// ✅ Load env first
dotenv.config();

// ✅ Connect DB
connectDB();

// ✅ THEN create app
const app = express();

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/tasks", require("./routes/taskRoutes"));
app.use("/api/teams", require("./routes/teamRoutes"));
app.use("/api/comments", require("./routes/commentRoutes"));

// ✅ add this
app.get("/", (req, res) => {
  res.send("TaskMaster API is running 🚀");
});

// ✅ Error middleware (ALWAYS LAST)
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

app.use(notFound);
app.use(errorHandler);

// ✅ Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));