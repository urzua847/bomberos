const express = require('express');
const evaluationSchema = require('../models/evaluation');
const router = express.Router();

//ingresar datos de evaluacion POST

router.post("/evaluations", (req, res) => { 
    const evaluation = evaluationSchema(req.body);
    evaluation
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//obtener datos de evaluacion

router.get('/evaluations', (req, res) => {
    evaluationSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
}); 

//obtener datos de evaluacion por id
router.get('/evaluations/:id', (req, res) => {
    evaluationSchema
    .findById(req.params.id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//actualizar datos de evaluacion por id
router.put('/evaluations/:id', (req, res) => {
    const { id } = req.params;
    const { criterio1, criterio2, criterio3, criterio4, criterio5, criterio6, criterio7 } = req.body;
    evaluationSchema
    .updateOne({_id: id}, {$set: {criterio1, criterio2, criterio3, criterio4, criterio5, criterio6, criterio7}})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//eliminar datos de evaluacion por id
router.delete('/evaluations/:id', (req, res) => {
    const { id } = req.params;
    evaluationSchema
    .deleteOne({_id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//exportar modulo
module.exports = router;