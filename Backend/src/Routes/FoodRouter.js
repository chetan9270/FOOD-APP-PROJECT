const express = require("express");
const router = express.Router();

const foodPartnerAuth = require("../middleware/FoodPartnerAuth");
const FoodController = require("../Controller/FoodController");

const multer = require("multer");

// simple memory storage
const storage = multer.memoryStorage();
const upload = multer({ storage });

// route
router.post(
  "/",
  foodPartnerAuth,
  upload.single("video"),
  FoodController.CreateFood
);

// ✅ export router directly
module.exports = router;
