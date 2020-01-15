const mongoose = require('mongoose');

// const User = require('../model/user');

const becryptjs = require('bcryptjs');

const UserRegister = require('../model/RegisterUser');
exports.PostRegisterController = async (req,res,next) =>{
    const salt = await becryptjs.genSalt(10);
    const hashpassword = await becryptjs.hash(req.body.password,salt);
        const user = new UserRegister({
                username : req.body.username, 
                email : req.body.email,
                password : hashpassword,
                phonenumber :  req.body.Phone_Number,
                address : req.body.home_address,
                nic :  req.body.NIC_number,
                gender : req.body.gender
                              });
                              console.log(user);
        try
        {
            const registerUser = await user.save();
            res.render('dashboard',{pageTitle:'Dashboard ::'});         //   res.redirect('dashboard'); 
        }
        catch(error)
        {
            res.status(500).send(error);
        }
}

exports.GetRegisterController = (req,res,next)=>{
    res.render('register',{pageTitle:'User Registration ::'});
}