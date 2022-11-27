let express = require('express');
let router = express.Router();


let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page. */
router.get('/home', indexController.displayHomePage);

/* GET About Us page. */
router.get('/about', indexController.displayAboutPage);

/* GET Products page. */
router.get('/products', indexController.displayProductsPage);

/* GET Contact Us page. */
router.get('/contact', indexController.displayContactPage);

module.exports = router;
