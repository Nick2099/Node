// requiered lines to be able to use express, body-parser, mySQL
const express = require("express");
const https = require("https");   // ?
const http = require("http");     // ?
const bodyParser = require("body-parser");
const mysql = require("mysql");
const fs = require("fs");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
// end of required lines

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
  var emailAddress = req.body.email;
  var password = req.body.pswd;

  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("<h2>E-mail address: " + emailAddress + "</h2><h2>Password: " + password + "</h2>");

  let rawData = fs.readFileSync("C:/Programming/settings.json");
  let infoLog = JSON.parse(rawData);
  console.log(infoLog);

  res.send();
});




app.listen(3000, function() {
  console.log("Server started on Port 3000 (localhost:3000).");
});
