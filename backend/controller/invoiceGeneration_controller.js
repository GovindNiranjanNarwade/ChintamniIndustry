const invoiceGenetaion = require("../model/invoiceGenetaion_model")

exports.createInvoiceGeneration = async(req,res)=>{
    try {
        const result = await invoiceGenetaion.create(req.body )
        console.log(result);
        res.json({
            
            success:true,
            message:"create a invoice Generation",
            data:result
        })
    } catch (error) {
        res.json({
            success:false,
            message:"Something  went wrong+{error}",
            data:null
        })  
        console.log(error);
    }
}
exports.getInvoiceGenetion = async(req,res)=>{
    try {
        const result = await invoiceGenetaion.find()
        res.json({
            count:result.length,
            success:true,
            message:"Get a Invoice Generation ",
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
exports.deleteInvoice = async(req,res)=>{
    try {
        const result = await invoiceGenetaion.findByIdAndDelete({_id:req.params.id})
        res.json({
            success:true,
            message:"Delete a Invoice Generation ",
            data:null
        })
    } catch (error) {
        res.json({
            success:false,
            message:"Something  went wrong",
            data:null
        })  
    }
}
exports.getSingleInvoiceGenetion = async(req,res)=>{
    try {
        const result = await invoiceGenetaion.findOne({_id:req.params.id})
        res.json({
            count:result.length,
            success:true,
            message:"Get a  Single Invoice Generation ",
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