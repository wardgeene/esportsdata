'use strict';

var mongoose = require('mongoose');

var tournament = new mongoose.Schema({
  title: String,
  short_title: String,
  city: String,
  description: String,
  short_description: String,
  format: String,
  start: Date,
  end: Date,
  deleted_at: Date,
  url: String,
  images: Object,
  prizepool: Object,
  links: Object,
  matches: Array,
  stages: Array,
  competitors: Array,
  game: String
});

var model = mongoose.model('Tournament', tournament);

module.exports = model;
