const express = require("express")
const {createStock,getStock,deleteStock,updateStock,getSingleStock} =require("../controller/stock_controller")

const router = express.Router()

router.route("/createStock").post(createStock)
// @url => http://192.168.43.220:5000/api/v1/createStock
// @method => POST
router.route("/getStock").get(getStock)
// @url => http://192.168.43.220:5000/api/v1/getStock
// @method =>GET
router.route("/stock/:id").get(getSingleStock).delete(deleteStock).put(updateStock)
// @url => http://192.168.43.220:5000/api/v1/stock/id
// @method =>GET


module.exports = router