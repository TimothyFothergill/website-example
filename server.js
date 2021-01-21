const http = require('http');
const fs = require('fs');
const express = require('express');
var path = require("path"); 
var cookieParser = require('cookie-parser');
const userInfo = require('./users.json')
const port = 3000;


var app = express();

app.use(express.static(__dirname + '/static'));
app.use(express.static(__dirname + '/scripts'));
app.use(cookieParser());

app.get('/', (req, res) => {
    console.log("Helloooooo");
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/loggedin.html'));
});

app.get('/loggedin', (req, res) => {
    // check if client sent cookie
    var cookie = req.cookies.cookieName;
    if (cookie === undefined) {
        
        // no: set a new cookie
        var randomNumber=Math.random().toString();
        randomNumber=randomNumber.substring(2,randomNumber.length);
        res.cookie('cookieName',randomNumber, { maxAge: 900000, httpOnly: true });
        console.log('cookie created successfully');
        res.end("oi no cookies");
    } else {
        
    //   // yes, cookie was already present 
        console.log('cookie exists', cookie);
        res.end("cookies");
    } 
    //next(); // <-- important!
    });

app.listen(port);


/* // set a cookie
app.use(function (req, res, next) {
  // check if client sent cookie
  var cookie = req.cookies.cookieName;
  if (cookie === undefined) {
    // no: set a new cookie
    var randomNumber=Math.random().toString();
    randomNumber=randomNumber.substring(2,randomNumber.length);
    res.cookie('cookieName',randomNumber, { maxAge: 900000, httpOnly: true });
    console.log('cookie created successfully');
  } else {
    // yes, cookie was already present 
    console.log('cookie exists', cookie);
  } 
  next(); // <-- important!
});

// let static middleware do its job
app.use(express.static(__dirname + '/public'));*/