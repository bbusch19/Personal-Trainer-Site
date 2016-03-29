var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var statusSchema = new Schema ({
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  body: {type: String, required: true}
}, {timestamps: true})

statusSchema.pre('find', function(next) {
    this.populate('user');
    next();
})

module.exports = mongoose.model('Status', statusSchema);
