const {Router} = require("express")
const { createFood, getMenu } = require("../controllers/foodcontroller")

const router =Router()

router.route("/food").post(createFood).get(getMenu)

module.exports=router