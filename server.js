require('dotenv').config()
const express =require('express')
const connectToDB = require('./database/db')
const authRoutes =require('./routes/auth-routes')

//connect to DB
connectToDB()

const app = express();
const PORT= 3000

//middlewares
app.use(express.json())

//routes
app.use('/api/auth',authRoutes)

app.listen(PORT,()=>{
    console.log(`Server is now running at port ${PORT}`);
    
})

