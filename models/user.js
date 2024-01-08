const mongoose=require('mongoose');

// Schema
const userSchema=new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
    }, 
    lastName:{
        type: String,
        required: false,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    }
})

// Model
const User=mongoose.model("User", userSchema);

// Export user
module.exports = User;