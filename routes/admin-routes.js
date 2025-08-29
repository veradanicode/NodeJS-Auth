const express = require('express')
const router = express.Router();
const authMiddleware =require('../middlewares/auth-middleware')


router.get('/welcome',authMiddleware,(req,res)=>{
    res.json({
        message:"Welcome to the admin page"
    })
})



module.exports =router;