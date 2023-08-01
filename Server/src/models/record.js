//crear modelo de registro
// Path: src\models\user.js
const mongoose = require("mongoose");

const recordSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true
  },
  ubication: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now() - 4 * 60 * 60 * 1000,
    required: true
  },
  cause: {
    type: String,
    required: false
  },
  description: {
    type: String,
    required: false
  }
});

module.exports = mongoose.model('Record', recordSchema);
