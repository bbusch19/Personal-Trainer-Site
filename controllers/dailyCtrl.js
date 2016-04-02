var mongoose = require('mongoose');
var Daily = require('../models/Daily.js');

module.exports = {
  create: function(req, res, next) {
    req.body.user = req.user;
    var daily = new Daily(req.body);
    daily.save(function(err, response) {
      if (err) res.status(500).json(err);
      else return res.status(200).json(response);
    })
  },
  read: function(req, res, next) {
    var query = {};
    Daily.find(query, function(err, response) {
      if (err) res.status(500).json(err);
      else res.status(200).json(response);
    })
  },
  delete: function(req, res, next) {
    var id = req.params.id;
    Daily.findByIdAndRemove(id, function(err, response) {
      if (err) res.status(500).json(err);
      else res.status(200).json(response);
    })
  },
  updateComment: function(req, res, next) {
      var id = req.params.id;
      var comment = {body: req.body.body, user: req.user._id};
      Daily.findByIdAndUpdate(id, {$push: {comments: comment}}, function(err, response) {
          if (err) res.status(500).json(err);
          else res.status(200).json(response);
      })
  },
  deleteComment: function(req, res, next) {
      var id = req.params.id;
      var daily = req.params.daily;
      Daily.findByIdAndUpdate(daily, {$pull: {comments: {_id: id}}}, function(err, response) {
          err ? res.status(500).send(err) : res.status(200).send(response)
      })
  }
}
