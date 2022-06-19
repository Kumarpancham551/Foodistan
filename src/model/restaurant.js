const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    address:{
        type:String
    },
    food:[
        {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Food'
    }
]
});

const restaurantModdel = new mongoose.model('Restaurant',restaurantSchema);
module.exports = restaurantModdel;