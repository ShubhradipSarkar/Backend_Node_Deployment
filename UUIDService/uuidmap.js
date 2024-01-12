// const sessionIdToUserMap = new Map();    // Stateful...
const jwt = require("jsonwebtoken");
const secretStampOnToken = "YouCanNothackmyserverlol@#$%^123456789sdfghjmk,520145852532" 
function setUUID(user){
    
    return jwt.sign({
        _id: user._id,
        email: user.email,
    }, secretStampOnToken)
    // sessionIdToUserMap.set(uuid, user);  // Stateful...
}

function getUserByUUID(token){
    if(!token) return null;
    return jwt.verify(token, secretStampOnToken);
}

module.exports = {setUUID, getUserByUUID};