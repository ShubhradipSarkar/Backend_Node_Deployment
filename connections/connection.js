// MongoDB connection
const mongoose=require('mongoose')

// Connect mongodb
async function connectMongoDB(url){
    return mongoose.connect(url)
    .then(()=>{console.log("MongoDB connected")})
    .catch((err)=>{console.log("Couldn't connect to MongoDB", err)});
}

module.exports={connectMongoDB};