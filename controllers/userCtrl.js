var mongoose = require('mongoose');
var User = require('../models/User.js');


module.exports = {
  create: function(req, res, next) {
    var user = new User(req.body);
    user.save(function(err, response) {
      if (err) res.status(500).json(err);
      else return res.status(200).json(response);
    })
  },
  read: function(req, res, next) {
    var query;
    if (req.query.id) query = {_id: req.query.id};
    else res.status(200).json(response);
  }
}
