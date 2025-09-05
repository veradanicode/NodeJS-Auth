const express = require('express');
const authMiddleware =require('../middlewares/auth-middleware')
const adminMiddleware =require('../middlewares/admin-middleware')


const router =express.Router();

//upload the image
router.post('/upload',authMiddleware,adminMiddleware )
//get all images

module.exports=router;