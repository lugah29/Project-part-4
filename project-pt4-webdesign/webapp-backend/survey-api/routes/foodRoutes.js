const express = require('express');
const router = express.Router();
const foodController = require('../controllers/foodController');  

router.get('/', foodController.getFoodData); 
router.post('/', foodController.addFoodSurvey);  

module.exports = router;
