const studentRouter = require("express").Router();
const Student = require("../models/Student");

studentRouter.post("/add", async (req, res) => {
  // const {name, email} = req.body;
  try {
    const student = new Student(req.body);
    await student.save();
    console.log(student);
    return res.status(200).json(req.body);
  } catch (err) {
    console.log("ERROR: " + err.message);
    return res.json({
      message: "ERROR: " + err.message,
    });
  }
});

module.exports = studentRouter;
