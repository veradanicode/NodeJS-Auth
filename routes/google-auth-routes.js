const express =require('express')
const passport =require('passport')
const router=express.Router();
const User =require('../models/User')
const jwt =require('jsonwebtoken')

router.get('/login',
    passport.authenticate('google',{scope:['email','profile']})
)

router.get('/callback',
     passport.authenticate('google',{failureRedirect:'/api/auth/google/failure' }),
     async (req, res) => {
    // req.user comes from Google profile
    let user = await User.findOne({ googleId: req.user.id });

    if (!user) {
      user = await User.create({
        username: req.user.displayName,
        email: req.user.emails[0].value,
        googleId: req.user.id,
      });
    }

    // ✅ Issue JWT for Google users too
    const token = jwt.sign(
      { userId: user._id, username: user.username, role: user.role },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1h" }
    );

    // You can redirect with token or send it back
    res.json({ success: true, token });

    }
)

router.get('/failure',(req,res)=>{
    res.status(401).send("Something went wrong!")
})

module.exports=router;