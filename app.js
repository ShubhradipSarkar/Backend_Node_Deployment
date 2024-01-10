require("dotenv").config();
const express=require('express');
const app=express();
const userRouter=require("./routes/user");
const AuthUserRouter=require("./routes/auth");
const {connectMongoDB}=require("./connections/connection");
const {logReqRes}=require("./middlewares/middlewares");
const { restrictToLoggedInUsersOnly } = require("./middlewares/cookieMiddleWare");
const cookieParser = require("cookie-parser");


// Port fixing
const port = process.env.PORT;

// Connect mongodb
connectMongoDB(process.env.MONGO_URL);

// Middlewares
app.use(express.urlencoded({encoded: false}))
app.use(logReqRes("api_Log.txt"));
app.use(cookieParser());
// app.use(());
// Routings
app.use("/api/users",restrictToLoggedInUsersOnly,userRouter);
app.use("/auth", AuthUserRouter);

// Run server
app.listen(port, ()=>{console.log("Server started")});

