const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const database = require('./Database/db_connection');


// default options
var app = express();


// app use defaults
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(cors());


//routes declarations
const usersController = require('./Controllers/usersController');
const weightController = require('./Controllers/weightController')


//middleware routes that handles requests
app.use('/users', usersController);
app.use('/weight', weightController);



module.exports = app;