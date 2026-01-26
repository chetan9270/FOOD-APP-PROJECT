const User = require("../model/UserModel");
const FoodPartner =require("../model/FoodPartner")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    const { email, username, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "Email already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      email,
      username,
      password: hashedPassword
    });
     
    res.status(201).json({ message: "User registered successfully", user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid email or password" });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ message: "Invalid email or password" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });

    res.cookie("token", token, { httpOnly: true });
    res.json({ message: "Login successful", token });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const logout = (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Logged out successfully" });
};



const FoodPartnerRegister = async (req, res) => {
  try {
    const { email, username, password } = req.body;

    const existingPartner = await FoodPartner.findOne({ email });
    if (existingPartner) return res.status(400).json({ message: "Email already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const partner = await FoodPartner.create({
      email,
      username,
      password: hashedPassword
    });

    res.status(201).json({ message: "FoodPartner registered successfully", partner });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const FoodPartnerlogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const partner = await FoodPartner.findOne({ email });
    if (!partner) return res.status(400).json({ message: "Invalid email or password" });

    const match = await bcrypt.compare(password, partner.password);
    if (!match) return res.status(400).json({ message: "Invalid email or password" });

    const token = jwt.sign({ id: partner._id }, process.env.JWT_SECRET, { expiresIn: "1d" });

    res.cookie("token", token, { httpOnly: true });
    res.json({ message: "FoodPartner login successful", token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const FoodPartnerlogout = (req, res) => {
  res.clearCookie("token");
  res.json({ message: "FoodPartner logged out successfully" });
};

// ===== Export all =====
module.exports = {
  register,
  login,
  logout,
  FoodPartnerRegister,
  FoodPartnerlogin,
  FoodPartnerlogout
};