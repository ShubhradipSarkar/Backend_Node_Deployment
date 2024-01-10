const sessionIdToUserMap = new Map();

function setUUID(uuid, user){
    sessionIdToUserMap.set(uuid, user);
}

function getUserByUUID(uuid){
    return sessionIdToUserMap.get(uuid);
}

module.exports = {setUUID, getUserByUUID};