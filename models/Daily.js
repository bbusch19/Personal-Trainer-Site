var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var dailySchema = new Schema({
  name: {
    first: {type: String, required: false},
    last: {type: String, required: false}
  },
  date: {type: Date, default: Date.now},
  body: {type: String, required: true}
}, {timestamps: true})

module.exports = mongoose.model('Daily', dailySchema);
