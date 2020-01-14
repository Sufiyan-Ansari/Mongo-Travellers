const express = require('express');
const app = express();
const ejs = require('ejs');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

app.set(express.json());
app.use(bodyparser.urlencoded({extended:false}));
app.set('view engine','ejs');

const LoginRouter = require('./router/LoginRouter');

app.use(LoginRouter);



dotenv.config();
mongoose.connect(process.env.DB_CONNECT,()=> console.log('Mongoose Connected !'));


app.listen(3000,()=>{console.log('Listening on Port 3000')});