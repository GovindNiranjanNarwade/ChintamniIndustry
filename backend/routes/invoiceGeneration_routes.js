const express = require("express")
const {createInvoiceGeneration,getInvoiceGenetion,getSingleInvoiceGenetion,deleteInvoice} =require("../controller/invoiceGeneration_controller")

const router = express.Router()

router.route("/createInvoiceGeneration").post(createInvoiceGeneration)
// @url => http://192.168.43.220:5000/api/v1/createInvoiceGeneration
// @method => POST
router.route("/getInvoiceGenetion").get(getInvoiceGenetion)
// @url => http://192.168.43.220:5000/api/v1/getInvoiceGenetion
// @method =>GET
router.route("/getInvoiceGenetion/:id").get(getSingleInvoiceGenetion).delete(deleteInvoice)
// @url => http://192.168.43.220:5000/api/v1/getInvoiceGenetion/id
// @method =>GET


module.exports = router