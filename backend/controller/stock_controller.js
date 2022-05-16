const stock = require("../model/stock_model")

exports.createStock = async(req,res)=>{
    try {
        const result = await stock.create(req.body)
        res.json({
            
            success:true,
            message:"create a Stock",
            data:result
        })
    } catch (error) {
        res.json({
            success:false,
            message:"Something  went wrong +{error}",
            data:null
        }) 
        console.log(error); 
    }
}
exports.getStock = async(req,res)=>{
    try {
        const result = await stock.find()
        res.json({
            count:result.length,
            success:true,
            message:"Get a Stock",
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
exports.deleteStock=async(req,res)=>{
    console.log(req.params.id);
    const result = await stock.findByIdAndDelete(req.params.id)
    try {
        res.json({
            
        message:"Delete Stock",
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
exports.updateStock=async(req,res)=>{
    const result = await stock.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });
    try {
        res.json({
            count:result.length,
        message:"Update a  Stock",
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
exports.getSingleStock = async (req, res) => {
    try {
      // console.log(req.params.id);
      const SingleStock = await stock.findById(req.params.id);
      res.status(200).json({
        success: true,
        message: "get all data",
        data: SingleStock,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: "no all data",
        data: null,
      });
    }
};