var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);

var userSchema = new Schema({
  name: {
    first: {type: String, required: false},
    last: {type: String, required: false}
  },
  email: {type: String, required: false},
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

userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, salt)
}

userSchema.methods.validatePassword = function(password) {
    return bcrypt.compareSync(password, this.password);
}

module.exports = mongoose.model('User', userSchema);
