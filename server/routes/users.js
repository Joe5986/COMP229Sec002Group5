var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');

let passport = require('passport');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Placeholder');
});




//let userController = require('../controllers/user');


/* GET Route show the login page*/
//router.get('/login', userController.displayLoginPage);

/* POST Route show the login page*/
//router.post('/login', userController.processLoginPage);


/* GET Route show the register page */
//router.get('/register', userController.displayRegisterPage);

/* POST  register page */
//router.post('/register', userController.processRegisterPage);
//router.get('/logout',userController.performLogout)

module.exports = router;