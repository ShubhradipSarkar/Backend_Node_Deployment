const express = require('express');
const router=express.Router();
const {getAllUsers_html,
       getAllUsersAPI,
       getAllUserByID, 
       patchAllUserById, 
       deleteAllUserByID, 
       postNewUser}=require("../controllers/apicontrollers");

// Returns HTML as response {Good for websites as it is faster}
router.get("/webonly", getAllUsers_html);

// Returns API as json {Good to have for all devices}
router.get("/", getAllUsersAPI);

// same API route hits 3 different methods {get, patch, delete merged}
router.route("/:id").get(getAllUserByID).patch(patchAllUserById).delete(deleteAllUserByID);

// Posting a new user to the data
router.post("/", postNewUser);

module.exports=router;