'use strict';

var Tournament = require('./models/tournament.js');

var tournaments = [
  'T1',
  'Tour 2',
  'Tournament 3'
];

tournaments.forEach(function(tournament, index) {
  Tournament.find({'title': tournament}, function(err, tournaments) {
    if(!err && !tournaments.length) {
      Tournament.create({title: tournament});
    };
  });
});
