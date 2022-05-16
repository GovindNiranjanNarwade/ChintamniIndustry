const inventory = require("../model/inventory_model")

exports.createInventory = async(req,res)=>{
    try {
        const result = await inventory.create(req.body)
        res.json({
            
            success:true,
            message:"create a Inventory",
            data:result
        })
    } catch (error) {
        res.json({
            success:false,
            message:"Something  went wrong",
            data:null
        })  
    }
}
exports.getInventory = async(req,res)=>{
    try {
        const result = await inventory.find()
        res.json({
            count:result.length,
            success:true,
            message:"Get a Inventory",
            data:result
        })
    } catch (error) {
        res.json({
            success:false,
            message:"Something  went wrong",
            data:null
        })  
    }
}
exports.deleteInventory=async(req,res)=>{
    console.log(req.params.id);
    const result = await inventory.findByIdAndDelete(req.params.id)
    try {
        res.json({
            count:result.length,
        message:"Delete Inventory",
        success:"true",
        data:null
        })
    } catch (error) {
        res.json({
            message:"Something went worng "+{error} ,
            success:"false",
            data:null
            }) 
    }
}
exports.updateInventory=async(req,res)=>{
    const result = await inventory.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });
    try {
        res.json({
            count:result.length,
        message:"Update a  Inventory",
        success:"true",
        data:null
        })
    } catch (error) {
        res.json({
            message:"Something went worng "+{error} ,
            success:"false",
            data:null
            }) 
    }
}
exports.getSingleInventory = async (req, res) => {
    try {
      // console.log(req.params.id);
      const SingleInventory = await inventory.findById(req.params.id);
      res.status(200).json({
        success: true,
        message: "get all data",
        data: SingleInventory,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: "no all data",
        data: null,
      });
    }
  };