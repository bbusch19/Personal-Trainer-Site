var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var statusSchema = new Schema ({
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  body: {type: String, required: true},
  comments: [{
      body: String,
      user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
  }]
}, {timestamps: true})

statusSchema.pre('find', function(next) {
    this.populate('user comments.user');
    next();
})

module.exports = mongoose.model('Status', statusSchema);
