const moment = require('moment');
var request = require('request');
const utils = require('./../utils/commonFunction');


exports.getFilteredWeatherData = async (req, res) => {
  try{
      let startTime = moment().format("YYYY-MM-DD HH:mm:ss");
      console.log("Enter : controllers.weatherDetails.getFilteredWeatherData, entry Date Time :- " + startTime);
      let date = moment().format('DD');
      const isPrime = await checkPrime(date);
      if(isPrime){
        request("http://samples.openweathermap.org/data/2.5/weather?zip=94040,us&appid=b6907d289e10d714a6e88b30761fae22", (err,weatherData) => {
          if(err)
          {
            console.log("exit : controllers.weatherDetails.getFilteredWeatherData with error :- " + err +  " timeTaken " + moment(moment().format("YYYY-MM-DD HH:mm:ss")).diff(startTime, "seconds") + " seconds");
            res.send(err)
          }
          else{
            console.log("exit : controllers.weatherDetails.getFilteredWeatherData with data :- " + JSON.stringify(weatherData.body) + " timeTaken " + moment(moment().format("YYYY-MM-DD HH:mm:ss")).diff(startTime, "seconds") + " seconds");
            res.send(weatherData.body);
          }
        });
      }
      else{
        console.log("exit : controllers.weatherDetails.getFilteredWeatherData with no data found, timeTaken " + moment(moment().format("YYYY-MM-DD HH:mm:ss")).diff(startTime, "seconds") + " seconds");
        req.send("Date is not prime so no data")
      }
    }
  catch(error){
      console.log("exit : controllers.weatherDetails.getFilteredWeatherData with error :- " + err +  " timeTaken " + moment(moment().format("YYYY-MM-DD HH:mm:ss")).diff(startTime, "seconds") + " seconds");
      res.send(err)
    }
}

async function checkPrime(number) {
  console.log("entry : controllers.weatherDetails.checkPrime, number :- " + number );
  for(let i = 2; i < number; i++){
    if(number % i === 0){
      console.log("exit : controllers.weatherDetails.checkPrime, returns :- " + false );
      return false;
    }
    else if(i === (number - 1)){
      console.log("exit : controllers.weatherDetails.checkPrime, returns :- " + true );
      return true
    }
  }
}
