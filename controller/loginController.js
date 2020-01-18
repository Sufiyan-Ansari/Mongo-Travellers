const mongoose = require('mongoose');

const User = require('../model/user');
const UserRegistration = require('../model/RegisterUser');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const verify = require('../router/verifyToken');

exports.PostLoginController = async (req,res,next)=>{

    //checking for username , email if exist return 400
    const emailExist = await UserRegistration.findOne(
    {   username:req.body.username,
        email:req.body.email
    });
    if(emailExist)
    {
        
  //  const token = jwt.sign({_id:User._id},process.env.TOKEN_SECRET);
    
   // console.log(token);
    
  //  res.setHeader('auth-token',token);
    res.redirect('dashboard');
    }
    else if(!emailExist){

       res.render('register');
    // const user = new User({
    //                 name: req.body.username,
    //                 email:req.body.email,
    //                 password:req.body.password
    //                       });
    // try
    // {
    //     const saveUser = await user.save();
    //     res.redirect('login');
    // }
    // catch(error)
    // {
    //     res.status(400).send(error);
    // }
}
}
exports.GetLoginController = (req,res,next)=>{
    res.render('login');
}