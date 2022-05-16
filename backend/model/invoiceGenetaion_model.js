const mongoose = require("mongoose")

const invoiceGenetaionSchema = mongoose.Schema({
    ItemName:{
        type:String,
       
        
    },
    Date:{
        type:String,
       
        
    },
   
    GstAmount:{
        type:Number,
        
    },
  
    Quantity:{
        type:Number,
        
    },
    Unit:{
        type:String,
         
    },
    Price:{
        type:Number,
         
    },
    Amount: {
        type:Number
    }
      
   

},{
timestamps:true
})
module.exports = mongoose.model("invoiceGeneration",invoiceGenetaionSchema)