const mongoose = require("mongoose");

const connect = ()=>{
    console.log("database connection request");
    return mongoose.connect("mongodb://localhost/foodistan");
}

module.exports = {
    connect
}