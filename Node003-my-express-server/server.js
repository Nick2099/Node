const express = require("express");
const app = express();

// other names instead of express and app can be used but those are familiar and best practice

app.get("/", function(req, res) {
  // console.log(request);
  res.send("<h1>Hello</h1><h2>Try to write as a address:</h2><h2>localhost:3000/contact</h2><h2>localhost:3000/about</h2>");
});

// localhost:3000 is represented by "/"
// When that request happen than we can trigger our callback function can have 2 parameters: request and response

app.get("/contact", function(req, res) {
  res.send("Contact me at: ....");
});

app.get("/about", function(req, res) {
  res.send("My name is Nikica Dadic");
});

app.listen(3000, function() {
  console.log("Server started on Port 3000");
});

// in broswer under the localhost:3000 (because that's the port we are listening), we are getting error cannot GET /
