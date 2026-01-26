const express = require("express");
const router = express.Router();
const authController = require("../Controller/AuthController");

router.post("/register", authController.register);
router.post("/login", authController.login);
router.post("/logout", authController.logout);

router.post("/FoodPartnerRegister", authController.FoodPartnerRegister);
router.post("/FoodPartnerlogin", authController.FoodPartnerlogin);
router.post("/FoodPartnerlogout", authController.FoodPartnerlogout);


module.exports = router;
