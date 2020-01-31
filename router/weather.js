var express = require('express');
var router = express.Router();
const weatherDetails = require('./../controllers/weatherDetails');

router.get('/onPrimeDate', weatherDetails.getFilteredWeatherData);

module.exports = router;
