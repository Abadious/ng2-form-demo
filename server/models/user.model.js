var mongoose            = require('mongoose'),
    Schema              = mongoose.Schema,
    Form                = require('../models/form')
mongooseUniqueValidator = require('mongoose-unique-validator');

var user = new Schema({
  email: {type: String, unique: true, required: true, lowercase: true},
  password: {type: String, required: true},
  forms: {type: Schema.Types.ObjectId, ref: 'Form'}
});

user.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('User', user);
