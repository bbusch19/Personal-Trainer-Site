var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var dailySchema = new Schema({
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  body: {type: String, required: true},
  comments: [{
      body: String,
      user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
  }]
}, {timestamps: true})

dailySchema.pre('find', function(next) {
    this.populate('user comments.user');
    next();
})

module.exports = mongoose.model('Daily', dailySchema);
