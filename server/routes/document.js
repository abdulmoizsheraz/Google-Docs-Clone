const express = require('express')
const router=express.Router();
const { body, validationResult } = require('express-validator')
const app = express();
const User =require("../models/user");
const ExtractUser=require("../utils/ExtractUser")
const jwt = require('jsonwebtoken');
const JWT_SECRET="moiz77131?1234"
router.post("/",ExtractUser,async (req,res)=>{
    try{
    const userID=req.user.id;
    const user=await User.findById(userID).select("-password");
res.send(user);
}catch(e){
    res.status(500).send("Server Error");
}
})
module.exports=router;
