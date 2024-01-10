const {v4: uuidv4}=require("uuid");
const AuthUser=require("../models/authUsers");
const {setUUID, getUserByUUID} = require("../UUIDService/uuidmap");

async function registerUser(req, res){

    const {name, email, password} = req.body;
    const createdUser = await AuthUser.create({
        name,
        email,
        password,
    });
    return res.status(200).json({message: "User registered"}); 
}

async function loginUser(req, res){
    const {email, password} = req.body;
    const IsUserRegistered = await AuthUser.findOne({email, password});

    if(!IsUserRegistered){
        return res.status(404).json({message: "Asli ID se ao saab"});
    }
    const sessionId = uuidv4();
    setUUID(sessionId, IsUserRegistered);
    res.cookie("uuid", sessionId);
    return res.status(201).json({message: "Welcome back!"});
    
}

async function logoutUser(req, res){

}

module.exports={registerUser, loginUser, logoutUser};