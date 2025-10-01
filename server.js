require('dotenv').config();
require('./config/oauth');
const express =require('express');
const connectToDB = require('./database/db')
const authRoutes =require('./routes/auth-routes')
const homeRoutes =require('./routes/home-routes')
const adminRoutes =require('./routes/admin-routes')
const uploadImageRoute = require('./routes/image-routes')
const googleAuth=require('./routes/google-auth-routes')
const session =require('express-session');
const passport = require('passport');

//connect to DB
connectToDB()

const app = express();
const PORT= process.env.PORT ||3000

//set view engine
app.set('view engine','ejs')

//middlewares
app.use(express.json())
app.use(session({
  secret: 'cats',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: true }
}));app.use(passport.initialize())
app.use(passport.session())

//routes
app.use('/api/auth',authRoutes)
app.use('/api/home',homeRoutes)
app.use('/api/admin',adminRoutes)
app.use('/api/image',uploadImageRoute)
app.use('/api/auth/google',googleAuth)
app.use('/wow',(req,res)=>{
  res.render('home')
})

app.listen(PORT,()=>{
    console.log(`Server is now running at port ${PORT}`);
    
})

