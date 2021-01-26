// *** those are necessary lines for all the server based application
// *** initialising express and application
const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

// *** getting requests and responses from page localhost:3000
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
  // res.send("Thanks for posting that.");  it can be sent only once!?
  // console.log(req.body);
  // console.log(req.body.num1);
  // console.log(req.body.num2);    it's printed in Hyper command prompt

  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2;
  // variables num1 and num2 comes from index.html file as names from input

  res.send("The result of calculation " + num1 + " + " + num2 + " = " + result);
});

// *** port listener setup to port 3000 so we can acces it on localhost:3000
app.listen(3000, function() {
  console.log("Server is running on port 3000.");
});
