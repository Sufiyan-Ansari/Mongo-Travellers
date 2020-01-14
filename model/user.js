const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        name:
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
        }
    }                                 );

    module.exports = mongoose.model('User',UserSchema);;