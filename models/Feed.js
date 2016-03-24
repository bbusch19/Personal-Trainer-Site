var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var statusSchema = new Schema ({
  name: {
    first: {type: String, required: false},
    last: {type: String, required: false}
  },
  date: {type: String, required: false},
  body: {type: String, required: true}
}, {timestamps: true})

module.exports = mongoose.model('Status', statusSchema);
