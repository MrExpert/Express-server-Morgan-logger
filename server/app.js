// import files and packages up here
var express = require('express');
var app = express();
var morgan =require('morgan');
var data = require('./data.json');

app.use(morgan('tiny'));

// create your express server below
app.get('/', function (req, res){
    res.send("its working");
});
app.get('/data', function (req, res){
    res.json(data);
})

// add your routes and middleware below

// finally export the express application
module.exports = app;
