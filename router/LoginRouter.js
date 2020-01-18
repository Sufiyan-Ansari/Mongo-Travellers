const router = require('express').Router();

const bodyParser = require('body-parser');
const verify = require('../router/verifyToken');
router.use(bodyParser.urlencoded({extended:false}));


const loginController = require('../controller/loginController');
const registerController =require('../controller/registerController');
const dashboardControler = require('../controller/dashboardController');

router.get('/login',loginController.GetLoginController);

router.post('/login',loginController.PostLoginController);


router.get('/register',registerController.GetRegisterController);

router.post('/register',registerController.PostRegisterController);



router.get('/dashboard',dashboardControler.GetDashboardController);

module.exports = router;
