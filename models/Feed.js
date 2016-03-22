var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var statusSchema = new Schema ({
  name: {
    first: {type: String, required: true},
    last: {type: String, required: true}
  },
  date: {type: String, required: true},
  body: {type: String, required: true}
})

module.exports = mongoose.model('Status', statusSchema);
