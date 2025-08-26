require('dotenv').config()
const express =require('express')
const connectToDB = require('./database/db')

//connect to DB
connectToDB()

const app = express();
const PORT= 3000

app.listen(PORT,()=>{
    console.log(`Server is now running at port ${PORT}`);
    
})

