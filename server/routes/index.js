var express = require('express');
var router = express.Router();

let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page. */
router.get('/home', indexController.displayHomePage);

/* GET About page. */
router.get('/about', indexController.displayAboutPage);

/* GET Products page. */
router.get('/products', indexController.displayProductsPage);

/* GET Services page. */
router.get('/services', indexController.displayServicesPage);

/* GET Contact page. */
router.get('/contact', indexController.displayContactPage);

/*GET Route for displaying the Login page - CREATE Operation*/
router.get('/login', indexController.displayLoginPage);

/*POST Route for processing the Login page - CREATE Operation*/
router.post('/login', indexController.processLoginPage);

/*GET Route for displaying the Register page - CREATE Operation*/
router.get('/register', indexController.displayRegisterPage);

/*POST Route for processing the Register page - CREATE Operation*/
router.post('/register', indexController.processRegisterPage);

/*GET to perform UserLogout */
router.get('/logout', indexController.performLogout);

module.exports = router;