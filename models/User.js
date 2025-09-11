const mongoose =require('mongoose')

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true,'This field is required!'],
        unique:true,
        trim:true
    },
    email:{
        type:String,
        required:[true,'This field is required!'],
        unique:true,
        trim:true,
        lowercase:true
    },
    password:{
        type:String,
        required:[true,'This field is required!']
    },
    role:{
        type:String,
        enum:['user','admin'],
        default:'user',

    }
},{timestamps:true})

module.exports=mongoose.model('User',UserSchema)