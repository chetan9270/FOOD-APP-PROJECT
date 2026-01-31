const mongoose = require("mongoose");

const foodItemSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
     
    },

    video: {
      type: String,
      required: true
    },

    description: {
      type: String,
      required: true,
      
    },

    

    
});

module.exports = mongoose.model("FoodItem", foodItemSchema);
