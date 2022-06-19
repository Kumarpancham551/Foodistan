const Order = require("../model/order");
const Food = require("../model/food");
const Restaurant = require("../model/restaurant");

const createOrder = async (data)=>{
try{
    const restaurant = await Restaurant.findById(data.restaurant);
    let order;
    if(data.order){
        order = await Order.findById(data.order);
        if(order.status != "cart"){
            console.log("order cannot be modified");
            return order;
        }
        }else{
            order = await new Order({user:data.user,status:"cart"});
        }
      restaurant.food.forEach((foodItem,index)=>{
        if(foodItem._id == data.food){
            order.food.push(foodItem)
        }
    })
    order.save();
    return order;
}catch(err){
    console.log(err);
}
}

const getOrder = async (id)=>{
    try{
        const order = await Order.findById(id).populate('food');
        return order;
    }catch(err){
        console.log(err);
    }
}
const totalPrice = async(id)=>{
    try{
        const order = await Order.findById(id).populate('food');
        let totalPrice =0;
        order.food.forEach((foodItem)=>{
            totalPrice += foodItem.price;
        })
        return totalPrice;
    }catch(err){
        console.log(err);
    }
}
const updateOrder = async(id,data)=>{
    try{
        const order = await Order.findById(id);
        order.status = data.status;
        order.save();
        return order;
    }catch(err){
        console.log(err);
    }
}
const deletItemFromOrder = async(data)=>{
    try{
        const order = await Order.findById(data.id);
        order.food.forEach((foodItem, index,object)=>{
            if(foodItem._id == data.food){
                object.splice(index,1);
            }
        })
        order.save();
        return order;
    }catch(err){
        console.log(err);
    }   
}


module.exports ={
 createOrder,
 getOrder,
 totalPrice,
 updateOrder,
 deletItemFromOrder
}