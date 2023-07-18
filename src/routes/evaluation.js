const express = require('express');
const evaluationSchema = require('../models/evaluation');
const router = express.Router();

//ingresar datos de evaluacion POST

router.post("/evaluation", (req, res) => { 
    const evaluation = evaluationSchema(req.body);
    evaluation
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//obtener datos de evaluacion

router.get('/evaluation', (req, res) => {
    evaluationSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
}); 
//exportar modulo
module.exports = router;