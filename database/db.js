const mongoose = require("mongoose");

function connectDB() {
  mongoose.connect(`mongodb+srv://ulaganathan:${process.env.DB_PASSWORD}@assign-mentor.lxnl1.mongodb.net/?retryWrites=true&w=majority&appName=assign-mentor`)
    .then(() => {console.log("Database is connected successfully!")})
    .catch((err) => console.error("ERROR: "+err.message));
}

module.exports = connectDB;