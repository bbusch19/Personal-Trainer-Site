var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var dailySchema = new Schema({
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  body: {type: String, required: true}
}, {timestamps: true})

module.exports = mongoose.model('Daily', dailySchema);
