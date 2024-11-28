const express = require("express");
require("dotenv").config();
const studentRouter = require("./routes/studentRouter");
const mentorRouter = require("./routes/mentorRouter");
const connectDB = require("./database/db");
const app = express();
app.use(express.json());
connectDB();

app.use("/student", studentRouter);
app.use("/mentor", mentorRouter);

app.get("*", (req, res) => {
  res.status(404).send("<h1>Page Not Found 404</h1>");
});

app.listen(process.env.PORT, () => {
  console.log("Server is connected successfully!");
});
