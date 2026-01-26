const mongoose = require("mongoose");

function connectDB() {
  mongoose.connect("mongodb://localhost:27017/Food-App")
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log("MongoDB Connection Error:", err));
}

module.exports = connectDB;
