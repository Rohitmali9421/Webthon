const express=require("express")
require('dotenv').config()
const cors = require('cors')
const connectMongoDB = require("./Utils/connection")
const UserRoutes=require("./Routes/User")
const BookingRoutes=require("./Routes/Booking")


const app=express()
const URI=process.env.MONGODB_URI
const port= process.env.PORT || 8000 
connectMongoDB(URI)

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/user", UserRoutes)
app.use("/book", BookingRoutes)

app.listen(port,()=>{
    console.log("Server started");   
})