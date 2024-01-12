
const AuthUser=require("../models/authUsers");
const {setUUID, getUserByUUID} = require("../UUIDService/uuidmap");

async function registerUser(req, res) {
    try {
        const { name, email, password } = req.body;
        const createdUser = await AuthUser.create({
            name,
            email,
            password,
        });
        return res.status(200).json({ message: "User registered", createdUser });
    } catch (error) {
        console.error("Error registering user:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

async function loginUser(req, res) {
    try {
        const { email, password } = req.body;
        const IsUserRegistered = await AuthUser.findOne({ email, password });

        if (!IsUserRegistered) {
            return res.status(404).json({ message: "Invalid credentials" });
        }

        const token = setUUID(IsUserRegistered);
        res.cookie("uuid", token);
        return res.status(201).json({ message: "Welcome back!" });
    } catch (error) {
        console.error("Error logging in user:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

async function logoutUser(req, res){

}

module.exports={registerUser, loginUser, logoutUser};