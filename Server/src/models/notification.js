//crear modelo de notificaciones
// Path: src\models\ntificaton.js
const mongoose = require("mongoose");

const notificationSchema = mongoose.Schema({

  tipe: {   //(por ejemplo, alerta de incendio, actualización de estado) 
  type: String,
  required: true,
  },
  date: {
    type: String,
    required: true
  },
  hour: {
    type: String,
    required: true
  },
  ubication: {  //(por ejemplo, coordenadas, dirección)
    type: String,
    required: true
  },
  gravity_level: {  //(por ejemplo, bajo, medio, alto)
    type: String,
    required: true
  },
  actual_state: {    //(por ejemplo, controlado, en progreso)
    type: String,
    required: true
  },
  additional_information: {  //(por ejemplo, si se requiere apoyo aéreo, si se requiere apoyo terrestre)
    type: String,
    required: true
  }
});

module.exports = mongoose.model('notification', notificationSchema);