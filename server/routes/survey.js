let express = require('express');
let router = express.Router();


let surveyController = require('../controllers/survey');

/* GET Surveys page. READ*/
router.get('/', surveyController.displaySurveysPage);

/* GET Create page. CREATE*/
router.get('/create', surveyController.displayCreatePage);

/* POST proccess Create page. CREATE*/
router.post('/create', surveyController.processCreatePage);

/* GET Edit page. UPDATE*/
router.get('/edit/:id', surveyController.displayEditPage);

/* POST process Edit page. UPDATE*/
router.post('/edit/:id', surveyController.processEditPage);

/* GET process Delete page. DELETE*/
router.get('/delete/:id', surveyController.processDeletePage);

/* GET Participate page. READ*/
router.get('/participate/:id', surveyController.displayParticipatePage);

/* Post process Participate page. READ*/
router.post('/participate/:id', surveyController.processParticapatePage);

module.exports = router;
