const FoodModel = require("../model/FoodItem")
const uploadFile = require("../SERVICES/service")
const { v4: uuid } = require("uuid");

const CreateFood = async (req, res) => {
  
  console.log(req.body)
  console.log(req.file)

  const uploadFood = await uploadFile(
    req.file.buffer,
    uuid()
  )

  console.log(uploadFood)
 

  const FoodItem = await FoodModel.create({
    Name : req.body.Name,
    video: uploadFood.url,
    description : req.body.description,
    
    

  })

  res.status(201).json({
    message : "FoodItem Created Sucessfully",
    food : FoodItem
  })

  
}

module.exports = {
  CreateFood,
}
