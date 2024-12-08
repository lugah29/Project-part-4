const express = require('express');
const router = express.Router();
const travelController = require('../controllers/travelController');  

router.get('/', travelController.getTravelData); 
router.post('/', travelController.addTravelSurvey);  

module.exports = router;
