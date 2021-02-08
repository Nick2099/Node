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
var reswritetxt = "";
// end of variables


app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
  var emailAddress = req.body.email;
  var password = req.body.pswd;
  var forwarded = req.body.submit;
  console.log("Forwarded: " + forwarded);

  // res.writeHead(200, {'Content-Type': 'text/html'});
  // res.write("<h2>E-mail address: " + emailAddress + "</h2><h2>Password: " + password + "</h2><h2>Task: " + forwarded + "</h2");

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

  con.connect(function(err) {
    if (err) {
      console.log("Error 01:" + err.message);
    } else {
      console.log("Connected to mySQL!");
      sql = "SELECT * FROM information_schema.tables WHERE table_schema = '" + con.config.database + "' AND table_name = '" + myUserTable + "'";
      // console.log(sql);
      con.query(sql, function(err, result) {
        if (err) {
          console.log("Error 02: " + err.message);
        } else if (result.length > 0) {
          if (forwarded == "login") {
            sql = "SELECT id FROM " + myUserTable + " WHERE user = '" + emailAddress + "' AND password = '" + password + "'";
            // console.log(sql);
            con.query(sql, function(err, result, fields) {
              if (err) {
                console.log("Error 03: " + err.message);
              } else {
                if (result.length==1) {
                  userId = result[0].id;
                  reswritetxt = "User ID: " + userId;
                } else if (result.length==0) {
                  reswritetxt = "There is no such user.";
                };
              };
              console.log("==>> " + reswritetxt);
            });
          };
        } else {
          console.log("Error 04: Table_scheme or table_name don't exist!");
        };
      });
    };
    console.log("==>>> " + reswritetxt + "User ID: " + userId);
  });

  function Output() {
    console.log("==> " + reswritetxt + "User ID: " + userId);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("<h2>E-mail address: " + emailAddress + "</h2><h2>Password: " + password + "</h2><h2>Task: " + forwarded + "</h2>" + reswritetxt);
    res.send();
  };

  setTimeout(Output, 1000); // without timeout function Output is executing before con.connect is finished! Have to find another way!!
                            // =====> Callback functions <======

  // if (forwarded == "login") {
  //   try {
  //     con.connect(function(err) {
  //       if (err) throw err;
  //       sql = "SELECT * FROM information_schema.tables WHERE table_schema = '" + con.config.database + "' AND table_name = '" + myUserTable + "x'";
  //       console.log(sql);
  //       con.query(sql, function(err, result, fields) {
  //         console.log(result);
  //         if (err) throw err;
  //         // console.log(result);
  //         if (result.length == 1 ) {
  //           // sql = "SELECT * FROM '" + myUserTable + "' WHERE user = '" + emailAddress + "' AND password = '" + password + "'";
  //           sql = "SELECT id FROM " + myUserTable + " WHERE user = '" + emailAddress + "' AND password = '" + password + "'";
  //           console.log(sql);
  //           try {
  //             con.query(sql, function(err, result, fields) {
  //               console.log(result);
  //               if (result.length==1) {
  //                 userId = result[0].id;
  //                 console.log("User ID: " + userId);
  //               } else if (result.length==0) {
  //                 console.log("There is no such user.");
  //               };
  //             });
  //           }
  //           catch (err) {
  //             console.log("Error 3: " + err.message);
  //           }
  //         };
  //       });
  //     });
  //   };
  //   catch (err) {
  //     console.log("Error 1: " + err.message);
  //   };
  // };

});


app.listen(3000, function() {
  console.log("Server started on Port 3000 (localhost:3000).");
});
