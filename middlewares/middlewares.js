const fs = require('fs');

function logReqRes(filename){
    return (req, res, next)=>{
        fs.appendFile(filename, `\n ${Date.now()}: ${req.method} ${req.path}`,
        (err, data)=>{next();});   // If we don't use this, our server will be struck in this line
    }
}

module.exports={logReqRes};