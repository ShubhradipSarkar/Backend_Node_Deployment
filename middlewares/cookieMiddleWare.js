const { getUserByUUID } = require("../UUIDService/uuidmap");

async function restrictToLoggedInUsersOnly(req, res, next){
    const uuid = req.cookies?.uuid;
    if(!uuid){
        return res.json({message: "Login kar bacchu"});
    }
    const userByThisUUID=getUserByUUID(uuid);
    if(!userByThisUUID) return res.json({message: "Login kar bacchu"});
    req.user=user;

    next();
}

module.exports = {
    restrictToLoggedInUsersOnly,
}