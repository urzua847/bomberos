//crear modelo de usuario
// Path: src\models\user.js
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true

  },
  role: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('User', userSchema);