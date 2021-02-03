const express = require("express");
const https = require("https");
const bodyParser = require("body-parser"); // allow us to look through the body of post request

const app = express();

app.use(bodyParser.urlencoded({extended: true})); // necessary code for using body-parser

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
  console.log(req.body.cityName);
  const query = req.body.cityName;
  const apiID = "0d4382fe20d4ecee43dd65eaebc16cf0";
  const units = "metric";
  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&units=" + units + "&appid=" + apiID;
  https.get(url, function(response) {
    const status = response.statusCode;
    console.log(status);
    if (status!=200) {
      res.send("<h1>Place " + query + " is not known!</h1>");
      // example of making object and turning in into JSON string
      const object = {
        name: "Nikica",
        favouriteColor: "indigo",
        height: "1.76"
      }
      console.log(JSON.stringify(object));
    } else {
      response.on("data", function(data) {
        const weatherData = JSON.parse(data);
        console.log(weatherData);
        const temp = weatherData.main.temp;
        const place = weatherData.name;
        const land = weatherData.sys.country;
        const descript = weatherData.weather[0].description;
        const icon = weatherData.weather[0].icon;
        const iconURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";

        console.log("Weather in " + place + ", " + land + ":");
        console.log(temp + " °C, " + descript);

        // res.send("<h1>Weather in " + place + ", " + land + ": " + temp + "°C, " + descript + "</h1>");

        // if we need more line/space we can use res.write several times and then res.send at the end because it can be sent only once
        res.write("<h1>Weather in " + place + ", " + land + ":</h1>");
        res.write("<h1>" + temp + " C, " + descript + "</h1>");
        res.write("<img src=" + iconURL + ">");
        res.send();

      });
    };
  });
});

// Ctrl(Strg) + / change multiple lines to comments and back


// send function can be used ONLY ONCE!
// res.send("Server is up and running.");

app.listen(3000, function() {
  console.log("Server is running on port 3000.");
});
