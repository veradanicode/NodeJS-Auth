const express = require('express');
const authMiddleware =require('../middlewares/auth-middleware')
const adminMiddleware =require('../middlewares/admin-middleware');
const uploadMiddleware = require('../middlewares/upload-middleware');
const {uploadImageController} =require('../controllers/image-controllers')

const router =express.Router();

//upload the image
router.post(
    '/upload',
    authMiddleware,
    adminMiddleware,
    uploadMiddleware.single("image"),
    uploadImageController
)
//get all images

module.exports=router;