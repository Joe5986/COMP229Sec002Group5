let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect to our Book Model
let Book = require('../models/book');

let bookController = require('../controllers/book');

/* GET Route for the Book List page - READ Operation */
router.get('/', bookController.displayBookList);

/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add', bookController.displayAddPage);

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add', bookController.processAddPage);

/* GET Route for displaying the Edit page - UPDATE Operation */
router.get('/edit/:id', bookController.displayEditPage);

/* POST Route for processing the Edit page - UPDATE Operation */
router.post('/edit/:id', bookController.processEditPage);

/* GET to perform  Deletion - DELETE Operation */
router.get('/delete/:id', bookController.performDelete);

module.exports = router;