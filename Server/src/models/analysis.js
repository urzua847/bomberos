//crear modulo de evaluacion
// Path: src/models/registro.js
const mongoose = require("mongoose");

const analysisSchema = mongoose.Schema({

    criterio1: {
        type: String,
        required: true
        },
    criterio2: {
        type: String,
        required: true
        },
    criterio3: {
        type: String,
        required: true
        },
    criterio4: {
        type: String,
        required: true
        },
    criterio5: {
        type: String,
        required: true
        },
    criterio6: {
        type: String,
        required: true
        },
    criterio7: {
        type: String,
        required: true
        }
});
//exporta modelo
module.exports = mongoose.model('analysis', analysisSchema);
