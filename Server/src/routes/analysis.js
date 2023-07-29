const express = require("express");
const analysisSchema = require("../models/analysis");
const router = express.Router();

// create analysis
router.post("/analysis", (req, res) => {
  const analysis = analysisSchema(req.body);
  analysis
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
// get all analysis
router.get("/analysis", (req, res) => {
    analysisSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
// get a analysis
router.get("/analysis/:id", (req, res) => {
  const { id } = req.params;
  analysisSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
// update a analysis
router.put("/analysis/:id", (req, res) => {
  const { id } = req.params;
  const { name, age, email } = req.body;
  analysisSchema
    .updateOne({ _id: id }, { $set: { name, age, email } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
// delete a analysis
router.delete("/analysis/:id", (req, res) => {
  const { id } = req.params;
  analysisSchema
    .findByIdAndRemove(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
//Routesnpm run
module.exports = router;

 