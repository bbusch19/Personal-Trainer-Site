var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: {
    first: {type: String, required: false},
    last: {type: String, required: false}
  },
  username: {type: String, unique: true, required: true},
  email: {type: String, required: false, unique: true},
  password: {type: String, required: false},
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
