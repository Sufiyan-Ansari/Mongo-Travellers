const mongoose = require('mongoose');

// const User = require('../model/user');

const UserRegister = require('../model/RegisterUser');
exports.PostRegisterController = async (req,res,next) =>{
        const user = new UserRegister({
                username : req.body.username, 
                email : req.body.email,
                password : req.body.password,
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