//crear modulo de evaluacion
// Path: src/models/registro.js
const mongoose = require("mongoose");

const evaluationSchema = mongoose.Schema({

    Tipo_de_Incendio: {
        type: String,
        required: true
        },
    Clase_de_incendio: {
        type: String,
        required: true
        },
    Tamaño: {
        type: String,
        required: true
        },
    Brigadistas_a_desplegar: {
        type: Number,
        required: true
        },
    Camiones_a_desplegar: {
        type: Number,
        required: true
        },
    Colaboracion_otras_brigadas: {
        type: Boolean,
        required: true
        }
});
//exporta modelo
module.exports = mongoose.model('evaluation', evaluationSchema);
