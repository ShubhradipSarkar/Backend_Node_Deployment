require("dotenv").config();
const express=require('express');
const app=express();
const userRouter=require("./routes/user");
const {connectMongoDB}=require("./connections/connection");
const {logReqRes}=require("./middlewares/middlewares")


// Port fixing
const port = process.env.PORT;

// Connect mongodb
connectMongoDB(process.env.MONGO_URL);

// Middlewares
app.use(express.urlencoded({encoded: false}))
app.use(logReqRes("api_Log.txt"));

// Routings
app.use("/api/users",userRouter);

// Run server
app.listen(port, ()=>{console.log("Server started")});

