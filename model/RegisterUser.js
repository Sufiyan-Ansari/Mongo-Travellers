const mongoose = require('mongoose');

const UserRegisterSchema = new mongoose.Schema(
    {
        username:
        {
            type:String,
            required:true,
            min:4,
            max:14
        },
        email:
        {
            type:String,
            required:true,
        
        },
        password:
        {
            type:String,
            required:true,
            min:6,
            max:20
        },
        phonenumber:{
            type:String,
            required:true,
            min:6,
            max:20
                
        },
        address:
        {
            type:String,
            required:true,
            min:6,
            max:20
        
        },
        nic :
        {
            type:String,
            required:true,
            min:6,
            max:20
        
        },
        gender : 
        {
            type:String,
            required:true,
            min:6,
            max:20
        }

    }                                 );

    module.exports = mongoose.model('UserRegister',UserRegisterSchema);;