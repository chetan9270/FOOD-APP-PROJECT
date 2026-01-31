const express = require("express");
const cookieParser = require("cookie-parser");
const connectDB = require("./src/db/db.js");
const AuthRouter= require("./src/Routes/AuthRouter");
const FoodRouter = require("./src/Routes/FoodRouter")
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cookieParser());

connectDB();

app.use("/api/auth",AuthRouter);
app.use("/api/Food",FoodRouter);

app.listen(3000, () => console.log("Server running on port 3000"));
