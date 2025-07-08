const jwt=require('jsonwebtoken');
const User=require('../models/User');

const protect=async(req,res,next)=>{
    try{
        let token=req.headers.authorization;
        if(token && token.startsWith('Bearer')){
            token=token.split(" ")[1]; //extract token
            const decoded=jwt.verify(token,process.env.JWT_SECRET);
            req.user=await User.findById(decoded.id).select("-password");
            next();
        }else{
            res.status(401).json({message:"Not authorized, no token"})
        }
    }catch(error){
        res.status(401).json({ message:error.message});
    }
}

module.exports= {protect}