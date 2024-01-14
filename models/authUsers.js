const mongoose=require('mongoose');

// Schema
const AuthuserSchema=new mongoose.Schema({
    name:{
        type: String,
        //required: true,
    }, 
    email:{
        type: String,
        //required: true,
        unique: true,
    },
    password:{
        type: String,
        
    }
})

// Model
const AuthUser=mongoose.model("AuthUser", AuthuserSchema);

// Export user
module.exports = AuthUser;