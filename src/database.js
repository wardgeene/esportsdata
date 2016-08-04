'use strict';

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/esportsdata', function(err) {
  if(err) {
    console.log('Failed to connect to MongoDB!');
  } else {
    console.log('Succesfully connected to MongoDB!');
  }
});
