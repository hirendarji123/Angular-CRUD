const express = require('express');
var app = express();
const path = require("path");
var bodyParser = require("body-parser");

var MongoClient = require("mongodb").MongoClient;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get('/', (req, res) => {
    res.send("<h1> hello evrey thing is fine");
    res.end();
})
app.listen(5000);