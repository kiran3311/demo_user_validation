const express = require("express");
const router = express.Router()
const User = require('../model/userSchema')


router.post("/register", async (req, res) => {
    try{
      const existUser = await User.findOne({email:req.body.email})
      if(existUser){
        res.status(200).send({success:false, message:"Email alredy registered"})

      }

     
        const newUser = new User(req.body)
        await newUser.save()
        res.status(200).send({success: true, message:"User registered successfully"})

    }
  catch(err){
    res.status(400).send(err)

  }})



  module.exports= router