const router = require('express').Router();

const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({extended:false}));

const loginController = require('../controller/loginController');
const registerController =require('../controller/registerController');

router.get('/login',(req,res,next)=>{
    res.render('login');
});


router.post('/login',loginController.PostLoginController);


router.get('/register',(req,res,next)=>{
    res.render('register',{pageTitle:'User Registration ::'});
});

router.post('/register',registerController.PostRegisterController);

module.exports = router;
