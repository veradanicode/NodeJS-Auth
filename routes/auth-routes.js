const express =require('express');
const {registerUser,loginUser}=require('../controllers/auth-controllers')
const router =express.Router();


//all routes relatable to authorization and authentication
router.post('/register',registerUser)
router.post('/login',loginUser)



module.exports =router;