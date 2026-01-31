const FoodModel = require("../model/FoodItem")

const CreateFood = (req,res)=>{
  console.log(req.foodpartner)
  console.log(req.body)
  console.log(req.file)

}

module.exports = {
  CreateFood,
}