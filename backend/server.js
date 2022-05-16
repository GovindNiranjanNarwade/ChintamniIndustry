const express = require('express')
const app = express()
const env = require("dotenv")
env.config({path:"./config/.env"})

const cors =require("cors")
const db = require("./config/db")

const admin = require("./routes/admin_routes")
const authAdmin = require("./routes/adminLogin_routes")
const inventory = require("./routes/inventory_routes")
const stock = require("./routes/stock_routes")
const invoice = require("./routes/invoiceGeneration_routes")

app.use(express.json())
db()
app.use(cors())
app.use("/api/v1/admin",admin)
app.use("/api/v1/admin",authAdmin)
app.use("/api/v1",inventory)
app.use("/api/v1",stock)
app.use("/api/v1",invoice)


app.listen(process.env.PORT, () => console.log(`http://localhost: ${process.env.PORT ||5000}!`))