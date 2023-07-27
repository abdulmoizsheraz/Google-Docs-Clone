// Extracting user from token
const jwt = require('jsonwebtoken');
const JWT_SECRET="moiz77131?1234"
const ExtractUser=(req,res,next)=>{
    const token=req.header("auth-token");
    if(!token){
        res.status(401).send({error:"Please auth using valid token"})
    }
    try{
        const data=jwt.verify(token,JWT_SECRET);
        req.user=data.user
        next();
    }catch(e){
res.status(401).send("Error")
    }
  

}
module.exports=ExtractUser;