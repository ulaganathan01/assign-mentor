const {Schema, model} = require("mongoose");

const studentSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
})

const Student = model("Student", studentSchema);

module.exports = Student;