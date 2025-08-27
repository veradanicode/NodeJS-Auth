const User =require('../models/User')
const bcrypt =require('bcryptjs')

// register controllers
 const registerUser = async(req,res)=>{
    try {
        //extract information from our request body
        const {username,email,password,role}=req.body;

        //check if the user already exists in datatbase
        const checkExistingUser =await User.findOne({$or:[{username},{email}]})
        if (checkExistingUser) {
            return res.status(400).json({
                success:false,
                message:"User already exists with this email/username!Try with different username/email"
            })
        }

        //hash user password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword =await bcrypt.hash(password,salt)

        //create new user and save
        const newUser = new User({
            username,
            email,
            password:hashedPassword,
            role:role ||"user"
        })

        await newUser.save();

        if (newUser) {
            res.status(201).json({
                success:true,
                message:"User created successfully"
            })
        }else{
            res.status(400).json({
                success:false,
                message:"Unable to create user!please try again"
            })
        }


    } catch (err) {
        console.log(err);
        res.status(500).json({
            success:false,
            message:"Something went wrong!please try again"
        })
    }
 }



// login controllers
 const loginUser = async(req,res)=>{
    try {
        
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success:false,
            message:"Something went wrong!please try again"
        })
    }
 }

module.exports ={
    registerUser,
    loginUser
}