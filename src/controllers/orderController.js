const orderModel = require("../model/order");
const orderService = require("../services/orderService");

const addItem = async(req,res)=>{
    try{
        const order = await orderService.createOrder(req.body);
        return res.status(500).json({
            message:"Added item to order",
            success : true,
            data : order
        })
    }catch(err){
        console.log(err);
        return res.status(500).json({
            message:"something went wrong",
            success : false
        })
    }
}
const getOrder = async(req,res)=>{
    try{
        const order = await orderService.getOrder(req.params.id);
        return res.status(500).json({
            message:"order returned",
            success : true,
            data : order
        })
    }catch(err){
        console.log(err);
        return res.status(500).json({
            message:"something went wrong",
            success : false
        })
    }
}

const orderTotal = async(req,res)=>{
    try{
        const price = await orderService.totalPrice(req.params.id);
        return res.status(500).json({
            message:"price returned",
            success : true,
            data : price
        })
    }catch(err){
        console.log(err);
        return res.status(500).json({
            message:"something went wrong",
            success : false
        })
    }
}

const updateOrder = async(req,res)=>{
    try{
        const order = await orderService.updateOrder(req.params.id,req.body);
        return res.status(500).json({
            message:"order updated",
            success : true,
            data : order
        })
    }catch(err){
        console.log(err);
        return res.status(500).json({
            message:"something went wrong",
            success : false
        })
    }
}

const deletItemFromOrder = async(req,res)=>{
    try{
        const order = await orderService.deletItemFromOrder(req.body);
        return res.status(500).json({
            message:"deleted item",
            success : true,
            data : order
        })
    }catch(err){
        console.log(err);
        return res.status(500).json({
            message:"something went wrong",
            success : false
        })
    }
}

module.exports ={
    addItem,
    getOrder,
    orderTotal,
    updateOrder,
    deletItemFromOrder
}