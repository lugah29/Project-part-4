const express = require('express');
const router = express.Router();
const technologyController = require('../controllers/technologyController');  

router.get('/', technologyController.getTechnologyData); 
router.post('/', technologyController.addTechnologySurvey);

module.exports = router;
