const mentorRouter = require("express").Router();
const Mentor = require("../models/Mentor");
const { ObjectId } = require("mongoose").Types;

mentorRouter.post("/add", async (req, res) => {
  // const {name, email} = req.body;
  try {
    const mentor = new Mentor(req.body);
    await mentor.save();
    console.log(mentor);
    return res.status(200).json(req.body);
  } catch (err) {
    console.log("ERROR: " + err.message);
    return res.json({
      message: "ERROR: " + err.message,
    });
  }
});

mentorRouter.post("/assign-student/:mentorId", async (req, res) => { // TO assign a student to a mentor the mentor id need to be passed as params and student id need to be passed in the body.
  const { mentorId } = req.params;
  const { studentId } = req.body;
  try {
    if (!mentorId || !studentId) {
      throw new Error("student/mentor id is missing!");
    }

    const mentor = await Mentor.findOne({ _id: new ObjectId(mentorId) });

    if (!mentor) throw new Error("No mentor found");

    const assignMentor = await Mentor.findOneAndUpdate(
      { _id: new ObjectId(mentorId) },
      { $push: { students: new ObjectId(studentId) } }
    );
    console.log(assignMentor);
    return res.status(200).json({
      message: "Student is assigned to the mentor successfully!",
      mentor: assignMentor,
    });
  } catch (err) {
    console.error("ERROR: " + err.message);
    return res.json({
      message: "ERROR: " + err.message,
    });
  }
});

mentorRouter.get("/get-stduents/:mentorId", async(req, res) => { //Api to get all the students for a particular mentor
    const {mentorId} = req.params;
    try{
        // const studentsList = await Mentor.findOne({_id: new ObjectId(mentorId)}, {students: 1, _id:0});
        const studentsList = await Mentor.aggregate([
            {$match: {_id: new ObjectId(mentorId)}},
            {$lookup: {from: "students", localField: "students", foreignField: "_id", as: "students"}},
            {$project: {students: 1}}
        ])
        if(!studentsList) throw new Error("No mentor found! Provide a valid mentor Id");
        return res.status(200).json({
            message:  "Students fetched successfully!",
            data: studentsList
        })
    }catch(error){
        console.error("ERROR: "+ error.message);
        return res.json({
            message: "ERROR: " + error.message
        })
    }
})

module.exports = mentorRouter;
