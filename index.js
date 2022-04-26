const express = require("express")
const morgan = require("morgan")
require("dotenv").config()
const connectDB = require("./config/connectDB")
const foodRoutes = require ("./routes/foodRoutes")
const userRoute = require("./routes/userRoute");

const app = express();

connectDB()
//Middlewares
app.use(express.json())
app.use(morgan("dev"))
app.use("/api/foods",foodRoutes);
app.use("/api/users",userRoute);

const PORT = process.env.PORT||9000

//home route
app.get("/",(req, res)=>{
    res.json("Welcome To my Menu API")
})

app.listen(PORT, ()=>{
    console.log("SERVER IS RUNNING!!!")
})