let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let passport = require('passport');

let surveyController = require('../controllers/survey');

// helper function for guard purposes
function requireAuth(req, res, next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

/* GET Surveys page. READ*/
router.get('/', surveyController.displaySurveysPage);

/* GET Create page. CREATE*/
router.get('/create', requireAuth, surveyController.displayCreatePage);

/* POST proccess Create page. CREATE*/
router.post('/create', requireAuth, surveyController.processCreatePage);

/* GET Edit page. UPDATE*/
router.get('/edit/:id', requireAuth, surveyController.displayEditPage);

/* POST process Edit page. UPDATE*/
router.post('/edit/:id', requireAuth, surveyController.processEditPage);

/* GET process Delete page. DELETE*/
router.get('/delete/:id', requireAuth, surveyController.processDeletePage);

/* GET Participate page. READ*/
router.get('/participate/:id', surveyController.displayParticipatePage);

/* Post process Participate page. READ*/
router.post('/participate/:id', requireAuth, surveyController.processParticapatePage);

module.exports = router;
