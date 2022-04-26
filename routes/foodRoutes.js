const {Router} = require("express")
const { createFood, getMenu } = require("../controllers/foodcontroller")
const {protect,admin } =require ("../middlewares/authMiddleware")

const router =Router()

router.route("/").post(protect, admin, createFood).get( protect, getMenu);

module.exports=router