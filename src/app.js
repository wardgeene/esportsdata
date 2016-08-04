'use strict';

// modules - in alphabethical order
var express = require('express');
var index = require('./routes/index');
var parser = require('body-parser');
var path = require('path');
var pug = require('pug');

//create app
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// database setup
require('./database');
require('./seed');

// static files server setup & json parser for methods
app.use('/static', express.static(__dirname + '/public'));
app.use(parser.json());

// routes setup
app.use('/', index);

// start server
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

// export app module to be used in other models
module.exports = app;
