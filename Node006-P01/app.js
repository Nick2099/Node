// requiered lines to be able to use express, body-parser, mySQL
const express = require("express");
const https = require("https");   // ?
const http = require("http");     // ?
const bodyParser = require("body-parser");
var mysql = require("mysql");
const fs = require("fs");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
// end of required lines

// constants for program
const myUserTable = "users";
// end of constants

// variables for program
var sql = "";
var userId = 0;
// end of variables


app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
  var emailAddress = req.body.email;
  var password = req.body.pswd;
  var forwarded = req.body.submit;
  console.log("reg: " + forwarded);

  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("<h2>E-mail address: " + emailAddress + "</h2><h2>Password: " + password + "</h2><h2>Task: " + forwarded + "</h2");

  let rawData = fs.readFileSync("C:/Programming/settings.json");
  let infoLog = JSON.parse(rawData);
  // console.log(infoLog.database);

  var con = mysql.createConnection({
    host: infoLog.database.host,
    user: infoLog.database.user,
    password: infoLog.database.password,
    database: infoLog.database.database
    // insecureAuth: true
  });

  if (forwarded == "login") {
    try {
      con.connect(function(err) {
        if (err) throw err;
        sql = "SELECT * FROM information_schema.tables WHERE table_schema = '" + con.config.database + "' AND table_name = '" + myUserTable + "'";
        console.log(sql);
        con.query(sql, function(err, result, fields) {
          if (err) throw err;
          console.log(result);
          if (result.length == 1 ) {
            // sql = "SELECT * FROM '" + myUserTable + "' WHERE user = '" + emailAddress + "' AND password = '" + password + "'";
            sql = "SELECT id FROM " + myUserTable + " WHERE user = '" + emailAddress + "' AND password = '" + password + "'";
            console.log(sql);
            con.query(sql, function(err, result, fields) {
              if (result.length==1) {
                userId = result[0].id;
                console.log("User ID: " + userId);
              }
              // console.log(result);
              // console.log("Lenght: ", result.length);
              // console.log("ID    : ", result[0].id);
              // result1 = JSON.parse(JSON.stringify(result));
              // console.log(result1);
              // console.log(result1[0].id);
            });
          };
        });
      });
    }
    catch (err) {
      console.log(err.message);
    }
  }

  // con.connect(function(err) {
  //   if (err) {
  //     console.log("Error:" + err.message);
  //   } else {
  //     console.log("Connected to mySQL!");
  //   };
  // })

  res.send();
});


app.listen(3000, function() {
  console.log("Server started on Port 3000 (localhost:3000).");
});
