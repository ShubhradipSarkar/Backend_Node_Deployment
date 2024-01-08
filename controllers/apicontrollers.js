const User=require("../models/user");

// Get users as html only for web
async function getAllUsers_html(req, res){
    const allUsers=await User.find({});
    const html = `<ul>${allUsers.map((user)=>`<li>${user.email}</li>`).join("")}</ul>`;
    return res.send(html);
}

// Get all users for all platform
async function getAllUsersAPI(req, res){
    const allUsers=await User.find({});
    return res.json(allUsers);
}

// Get user by particular id
async function getAllUserByID(req, res){
    const UserById = await User.findById(req.params.id);
    if (!UserById) return res.status(404).json({error: "User by this id not found"});
    return res.json(UserById);
}

// On particular id
async function patchAllUserById(req, res){
    // Put 
    await User.findByIdAndUpdate(req.params.id, req.body, {new:true});
    return res.status(202).json({words: "all good"});
} 

async function deleteAllUserByID(req, res){
    // Delete
    const UserToDelete = await User.findByIdAndDelete(req.params.id);
    return res.json({msg: "success"});
}

// Post new user
async function postNewUser(req, res){
    const body=req.body;
    console.log("body : ", body);
    
    const createdUser = await User.create({
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email
    }).catch((err)=>{console.log("sob kichu fill kor chutiya")});

    console.log(createdUser);
    return res.status(201).json({msg: "success"});
}

module.exports={
    getAllUsers_html,
    getAllUsersAPI,
    getAllUserByID,
    patchAllUserById,
    deleteAllUserByID,
    postNewUser,
}