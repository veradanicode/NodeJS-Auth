

// register controllers
 const registerUser = async(req,res)=>{
    try {
        
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