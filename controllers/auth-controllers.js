require('dotenv').config()
const User =require('../models/User')
const bcrypt =require('bcryptjs')
const jwt =require('jsonwebtoken')

// register controllers
 const registerUser = async(req,res)=>{
    try {
        //extract information from our request body
        const {username,email,password,role}= req.body;

        //check if the user already exists in datatbase
        const checkExistingusername =await User.findOne({username})
        const checkExistingemail =await User.findOne({email})
        if (checkExistingusername) {
            return res.status(400).json({
                success:false,
                message:"User already exists with this username!Try with different username"
            })
        }
        if (checkExistingemail) {
            return res.status(400).json({
                success:false,
                message:"User already exists with this email!Try with different email"
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
         //extract information from our request body
        const {username,password}= req.body;

        //check if username exists
        const user= await User.findOne({username})
        if (!user) {
            return res.status(404).json({
                success:false,
                message:"Invalid username."
            })
        }

        //check if password is correct
        const isPassword = await bcrypt.compare(password,user.password)
        if (!isPassword) {
            return res.status(404).json({
                success:false,
                message:"Invalid password."
            }) 
        }

        //create user token
        const accessToken = jwt.sign({
            userId:user._id,
            username:user.username,
            role:user.role
        },process.env.JWT_SECRET_KEY,
        {expiresIn:'15m'})

        res.status(200).json({
            success:true,
            message:"Logged In successfully.",
            accessToken
        }) 

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