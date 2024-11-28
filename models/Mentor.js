const {Schema, model} = require("mongoose");

const mentorSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    students: Array
})

const Mentor = model("Mentor", mentorSchema);

module.exports = Mentor;