const mongoose = require("mongoose")

const inventorySchema = mongoose.Schema({
    Date:{
        type:String,
        required:true
        
    },
    NameOfProduct:{
        type:String,
        required:true
    },
    Quantity:{
        type:Number,
        required:true
    },
    Unit:{
        type:String,
        required:true  
    },

},{
timestamps:true
})
module.exports = mongoose.model("inventory",inventorySchema)