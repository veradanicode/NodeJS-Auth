require('dotenv').config()
const mongoose =require('mongoose')

const connectToDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDB Connected Successfully!");
        

    } catch (error) {
        console.log('MongoDB conectio failure: ',error);
        process.exit(1)
        
    }
}

module.exports = connectToDB;