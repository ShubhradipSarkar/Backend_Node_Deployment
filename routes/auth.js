const express = require('express');
const Authrouter=express.Router();
const {registerUser, loginUser, logoutUser}=require("../controllers/authAPIcontrollers");
const router = require('./user');

// Returns API as json {Good to have for all devices}
Authrouter.post("/register", registerUser);

Authrouter.post("/login", loginUser);

Authrouter.post("/logout", logoutUser);

module.exports=Authrouter;