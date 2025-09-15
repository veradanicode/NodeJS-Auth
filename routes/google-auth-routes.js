const express =require('express')
const passport =require('passport')
const router=express.Router();

router.get('/login',
    passport.authenticate('google',{scope:['email','profile']})
)

router.get('/callback',
     passport.authenticate('google'),{
            successRedirect:'/api/home/welcome',
            failureRedirect:'api/auth/google/failure'
        }
)

router.get('api/auth/google/failure',(req,res)=>{
    res.status(401).send("Something went wrong!")
})
module.exports=router;