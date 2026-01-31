const jwt = require("jsonwebtoken");
const FoodPartner = require("../model/FoodPartner");

const foodPartnerAuth = async (req, res, next) => {
  try {
   
    const token =
      req.cookies?.token ||
      req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    
    const foodPartner = await FoodPartner.findById(decoded.id);

    if (!foodPartner) {
      return res.status(401).json({ message: "FoodPartner not found" });
    }

    
    req.foodPartner = foodPartner;

    
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

module.exports = foodPartnerAuth;
