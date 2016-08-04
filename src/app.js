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
app.use(express.static(path.join(__dirname, '../public')));
app.use(parser.json());

// routes setup
app.use('/', index);

// start server
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

// export app module to be used in other models
module.exports = app;
