const mongoose = require("mongoose");

const foodItemSchema = new mongoose.Schema(
  {
    foodName: {
      type: String,
      required: true,
     
    },

    videoUrl: {
      type: String,
      required: true
    },

    description: {
      type: String,
      required: true,
      
    },

    foodPartnerName: {
      type: String,
      required: true
    },

    
});

module.exports = mongoose.model("FoodItem", foodItemSchema);
