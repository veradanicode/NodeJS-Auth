require('dotenv').config()
const express =require('express')
const connectToDB = require('./database/db')
const authRoutes =require('./routes/auth-routes')
const homeRoutes =require('./routes/home-routes')


//connect to DB
connectToDB()

const app = express();
const PORT= process.env.PORT ||3000

//middlewares
app.use(express.json())

//routes
app.use('/api/auth',authRoutes)
app.use('/api/home',homeRoutes)


app.listen(PORT,()=>{
    console.log(`Server is now running at port ${PORT}`);
    
})

