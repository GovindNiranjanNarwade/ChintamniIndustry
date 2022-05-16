const mongoose = require("mongoose")

const stockSchema = mongoose.Schema({
    Date:{
        type:String,
        
        
    },
    Product:{
        type:String,
       
    },
    Quantity:{
        type:Number,
        
    },
    Rate:{
        type:Number,
        
    },
    Total:{
        type:Number,
          
    },

},{
timestamps:true
})
module.exports = mongoose.model("stock",stockSchema)