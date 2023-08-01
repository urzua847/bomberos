//crear modelo de usuario
// Path: src\models\user.js
const mongoose = require("mongoose");

const supportAlertSchema = mongoose.Schema({
  assignedResources: {
    type: String,
    required: true,
  },
  ActionsDates: {
    type: String,
    required: true
  },
  ActionsDescripcion: {
    type: Number,
    requeried: true
  },
  RecordOfAdditionalResourcesRequested: {
    type: String,
    required: true

  },
  NotesAndObservations: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('supportAlert', supportAlertSchema);


