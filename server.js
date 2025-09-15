require('dotenv').config();
require('./config/oauth');
const express =require('express');
const connectToDB = require('./database/db')
const authRoutes =require('./routes/auth-routes')
const homeRoutes =require('./routes/home-routes')
const adminRoutes =require('./routes/admin-routes')
const uploadImageRoute = require('./routes/image-routes')
const googleAuth=require('./routes/google-auth-routes')

//connect to DB
connectToDB()

const app = express();
const PORT= process.env.PORT ||3000

//middlewares
app.use(express.json())

//routes
app.use('/api/auth',authRoutes)
app.use('/api/home',homeRoutes)
app.use('/api/admin',adminRoutes)
app.use('/api/image',uploadImageRoute)
app.use('/api/auth/google',googleAuth)

app.listen(PORT,()=>{
    console.log(`Server is now running at port ${PORT}`);
    
})

