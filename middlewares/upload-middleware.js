const multer =require('multer');
const path =require('path');

//set our multer storage
const storage =multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"uploads/")
    },
    filename:function(req,file,cb){
        cb(null,
            file.fieldname + "-" +Date.now() + path.extname(file.originalname)
        )
    }
})

//file filter function