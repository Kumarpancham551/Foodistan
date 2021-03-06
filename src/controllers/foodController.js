const crud = require("../services/crudservice");
const Food = require("../model/food");
const Restaurant = require("../model/restaurant")
const create = async(req,res)=>{
    try{
        const food = await crud.create(Food,req.body);
        const restaurant = await crud.getById(Restaurant,req.body.restaurant);
        restaurant.food.push(food);
        restaurant.save();
        return res.status(200).json({
            message:"Successfully added new food item",
            successs: true,
            data:food
        })
    }catch(err){
        console.log(err);
        res.status(500).json({
            message:"Something went wrong",
            success: false
        })
        
    }
}
const destroy = async(req,res)=>{
    try{
        const restaurant = await crud.getById(Restaurant, req.params.restaurantId);
        restaurant.food.forEach((item, index,object)=>{
            if(item._id == req.params.id){
                object.splice(index,1);
            }
        });
        restaurant.save();
        const food = await crud.destroy(Food,req.params.id);
        return res.status(200).json({
            message:"Successfully deleted new food item",
            successs: true,
            data:food
        })
    }catch(err){
        console.log(err);
        res.status(500).json({
            message:"Something went wrong",
            success: false
        })
    }
}
module.exports={
    create,
    destroy
}