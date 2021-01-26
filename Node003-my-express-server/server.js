const express = require("express");
const app = express();

// other names instead of express and app can be used but those are familiar and best practice

app.get("/", function(req, res) {
  // console.log(request);
  res.send("<h1>Hello</h1>");
});

// localhost:3000 is represented by "/"
// When that request happen than we can trigger our callback function can have 2 parameters: request and response

app.listen(3000, function() {
  console.log("Server started on Port 3000");
});

// in broswer under the localhost:3000 (because that's the port we are listening), we are getting error cannot GET /
