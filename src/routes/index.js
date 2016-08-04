var express = require('express');
var router = express.Router();
var Tournament = require('../models/tournament');

router.get('/', function (req, res) {
  // res.send('root');
  Tournament.find({}, function(err, tournaments) {
    if(err) {
        //do something
        return res.status(500).json({message: err.message});
    }
    res.json({tournaments: tournaments});
  });
});

router.post('/', function (req, res) {
  var tournament = req.body;
  Tournament.create(tournament, function(err, tournament) {
    if(err) {
      return res.status(500).json({err: err.message});
    }
    res.json({'tournament': tournament, message: 'Tournament Created'});
  });
});

router.put('/:id', function (req, res) {
  var id = req.params.id;
  var tournament = req.body;
  if(tournament && tournament._id !== id) {
    return res.status(500).json({err: "Ids don't match"});
  }
  Tournament.findByIdAndUpdate(id, tournament, {new: true}, function(err, tournament) {
    if(err) {
      return res.status(500).json({err: err.message});
    }
    res.json({'tournament': tournament, message: 'Tournament Updated'});
  });
});

router.delete('/:id', function (req, res) {
  var id = req.params.id;
  Tournament.findByIdAndRemove(id, function(err, result) {
    if(err) {
      return res.status(500).json({err: err.message});
    }
    res.json({message: 'Tournament Deleted'});
  });
});

module.exports = router;
