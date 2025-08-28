
const authMiddleware = (req,res,next)=>{
    console.log("Auth midlleware is called");
    next()
}



module.exports = authMiddleware