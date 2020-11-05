const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var app = express();
app.use(bodyParser.json());

const { mongoose } = require('./db.js');

var employeeController = require('./controllers/employeeController');



app.use(cors({ origin: 'http://localhost:4200' }));


app.use('/', employeeController);

app.listen(3000, () => console.log('Server started at port : 3000'));