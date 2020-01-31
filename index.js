const express = require("express")
var routes = require('./router/weather.js')
const app = express();

app.use('/weather', routes);

app.listen(3000, () => console.log("server up on port 3000"));
