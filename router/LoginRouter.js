const router = require('express').Router();

const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({extended:false}));

const loginController = require('../controller/loginController');
const registerController =require('../controller/registerController');

router.get('/login',loginController.GetLoginController);

router.post('/login',loginController.PostLoginController);


router.get('/register',registerController.GetRegisterController);

router.post('/register',registerController.PostRegisterController);

module.exports = router;
