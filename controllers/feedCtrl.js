var mongoose = require('mongoose');
var Status = require('../models/Feed.js');

module.exports = {
  create: function(req, res, next) {
    req.body.user = req.user;
    var status = new Status(req.body);
    status.save(function(err, response) {
      if (err) res.status(500).json(err);
      else return res.status(200).json(response);
    })
  },
  read: function(req, res, next) {
    var query = {};
    Status.find(query, function(err, response) {
      if (err) res.status(500).json(err);
      else res.status(200).json(response);
    })
  },
  delete: function(req, res, next) {
    var id = req.params.id;
    Status.findByIdAndRemove(id, function(err, response) {
      if (err) res.status(500).json(err);
      else res.status(200).json(response);
    })
  },
  updateComment: function(req, res, next) {
      var id = req.params.id;
      var comment = {body: req.body.body, user: req.user._id};
      Status.findByIdAndUpdate(id, {$push: {comments: comment}}, function(err, response) {
          if (err) res.status(500).json(err);
          else res.status(200).json(response);
      })
  },
  deleteComment: function(req, res, next) {
      var id = req.params.id;
      var status = req.params.status;
      Status.findByIdAndUpdate(status, {$pull: {comments: {_id: id}}}, function(err, response) {
          err ? res.status(500).send(err) : res.status(200).send(response)
      })
  },
  getUserStatus: function(req, res, next) {
      var id = req.user._id;
      Status.find({'user': id}, function(err, response) {
          if (err) res.status(500).json(err);
          else res.status(200).json(response);
      })
  }
}
