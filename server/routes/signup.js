const express = require('express')
const router=express.Router();
const { body, validationResult } = require('express-validator');
const User =require("../models/user");
const bcrypt = require('bcrypt');
const JWT_SECRET="moiz77131?1234"
const jwt = require('jsonwebtoken');
const app = express();
 // Signing up user with Post req at route /api/signup
router.post('/',[
body("email").isEmail().withMessage("Enter the Correct Email"),
body("name").isLength({min:3}).withMessage("The Name should have minimum three Characters"),
body("password").isLength({min:8}).withMessage("The password should have minimum three Characters")

], async(req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  try {
    const existingUser = await User.findOne({email:req.body.email});
    if(existingUser){
      return res.status(400).json({ error: "Sorry a user with this email already exists" })
    }else{
      const {email,password,name}=req.body;
      const salt= await bcrypt.genSalt(10);
      const securedPassword= await bcrypt.hash(password,salt);
      const user = new User({
        email:email,
        password:securedPassword,
        name:name
      });
      const data={
user:{
  id:user.id
}
      }
      const authtoken=jwt.sign(data,JWT_SECRET);
      console.log(authtoken);
      await user.save();
    return   res.status(200).json({ authToken: authtoken, message: "User created successfully." });
    }
  } catch (err) {
   return  res.status(500).send("Error while creating user.");
  }
  })

  module.exports=router;
