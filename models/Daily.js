var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var dailySchema = new Schema({
  name: {
    first: {type: String, required: true},
    last: {type: String, required: true}
  },
  date: {type: String},
  body: {type: String}
})

module.exports = mongoose.model('Daily', dailySchema);
