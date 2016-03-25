var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: {
    first: {type: String, required: true},
    last: {type: String, required: true}
  },
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  admin: {type: Boolean, default: false, required: true},
  bio: {type: String},
  height: {type: Number},
  weight: {type: Number},
  goals: {
    weightloss: {type: Boolean},
    musclegain: {type: Boolean}
  }
})

module.exports = mongoose.model('User', userSchema);
