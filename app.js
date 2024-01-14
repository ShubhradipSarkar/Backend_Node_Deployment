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
// Add headers before the routes are defined
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
app.use(express.urlencoded({encoded: false}))
app.use(logReqRes("api_Log.txt"));
app.use(cookieParser());
// app.use(());
// Routings
app.use("/api/users",restrictToLoggedInUsersOnly,userRouter);
app.use("/auth", AuthUserRouter);

// Run server
app.listen(port, ()=>{console.log("Server started")});

