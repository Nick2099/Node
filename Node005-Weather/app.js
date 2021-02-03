const express = require("express");
const https = require("https");

const app = express();

app.get("/", function(req, res) {
  const url = "https://api.openweathermap.org/data/2.5/weather?q=Landshut&units=metric&appid=0d4382fe20d4ecee43dd65eaebc16cf0";
  https.get(url, function(response) {
    console.log(response.statusCode);
    response.on("data", function(data) {
      const weatherData = JSON.parse(data);
      console.log(weatherData);
      const temp = weatherData.main.temp;
      const place = weatherData.name;
      const land = weatherData.sys.country;
      const descript = weatherData.weather[0].description;

      console.log("Weather in " + place + ", " + land + ":");
      console.log(temp + "°C, " + descript);

      /* example of making object and turning in into JSON string */
      const object = {
        name: "Nikica",
        favouriteColor: "indigo",
        height: "1.76"
      }
      console.log(JSON.stringify(object));
    });
  });
  res.send("Server is up and running.");
});




app.listen(3000, function() {
  console.log("Server is running on port 3000.");
});
