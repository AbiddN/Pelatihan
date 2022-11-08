require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const User = require("./models/user");

/* Create express app */
const app = express();

/* Body parser */
app.use(express.json({ limit: "25mb" }));

/* Enable CORS */
app.use(cors({
  origin: '*'
}));

/* Cookie parser */
app.use(cookieParser())

/* MongoDB connection */
mongoose.connect(process.env.MONGOURI, (err) => {
  if (err) throw err;
  console.log("Connected to MongoDB");
});

/* Routes */
const userRouter = require("./routes/user");

app.use("/api", userRouter);

const PORT = process.env.PORT || 5000;

// Admin JS

const server = app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});