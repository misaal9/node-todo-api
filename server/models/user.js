const mongoose = require('mongoose');

var User = mongoose.model('User', {
  email: {
    type: String,
    required: Boolean,
    trim: true,
    minLength: 1
  },
  password: {
    type: String,
    trim: true
  }
});

module.exports = {User}
