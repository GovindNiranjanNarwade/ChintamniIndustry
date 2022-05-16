const express = require("express")
const {createInventory,getInventory,deleteInventory,getSingleInventory,updateInventory} =require("../controller/inventory_controller")

const router = express.Router()

router.route("/createInventory").post(createInventory)
// @url => http://192.168.43.220:5000/api/v1/createInventory
// @method => POST
router.route("/getInventory").get(getInventory)
// @url => http://192.168.43.220:5000/api/v1/getInventory
// @method =>GET
router.route("/inventory/:id").get(getSingleInventory).delete(deleteInventory).put(updateInventory)
// @url => http://192.168.43.220:5000/api/v1/inventory/id
// @method =>GET

module.exports = router