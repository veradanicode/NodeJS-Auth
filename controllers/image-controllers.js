const Image =require('../models/Image')
const {uploadToCloudinary} =require('../helpers/cloudinaryHelpers')

const uploadImage = async (req,res)=>{
    try {
        //check if file path is missing in req object
        if (!req.file) {
            return res.status(400).json({
                success:false,
                message:"File is required!Please uploasd an image"
            })
        }

        //upload to Cloudinary
        const {url,publicId} =await uploadToCloudinary(req.file.path)

        // upload to img url and publicId along with uploaded user id to mongoDB db
        const newlyUploadedImage = new Image({
            url,
            publicId,
            uploadedBy: req.userId.userId
        })

        await newlyUploadedImage.save();

        res.status(201).json({
            success:true,
            message:"Image Uploaded Succesfully",
            image:newlyUploadedImage
        })


    } catch (error) {
        console.log(error);
        res.status(500).json({
            success:false,
            message: "Something went wrong!Please try again"
        })
    }
}

module.exports = {
    uploadImage,
}