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
  rut: {
    type: Number,
    required: true
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
    type: String,
    required: true
  },
  TDI: {
    type: String,
    required: true
  },
  CDI: {
    type: String,
    required: true
  },
  size: {
    type: String,
    required: true
  },
  cause: {
    type: String,
    required: false
  }
});

module.exports = mongoose.model('Record', recordSchema);
