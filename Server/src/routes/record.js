const express = require("express");
const recordSchema = require("../models/record");
const { removeAllListeners } = require("nodemon");
const router = express.Router();
// create records
router.post("/records", (req, res) => {
  const record = recordSchema(req.body);
  record
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
//get all records
router.get('/records', (req, res) => {
  recordSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
//Mostrar un registro
// get a record
router.get("/records/:id", (req, res) => {
  const { id } = req.params;
  recordSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
// update a record
router.put("/records/:id", (req, res) => {
  const { id } = req.params;
  const { name, lastname, rut, phone, ubication, date, hour, TDI, cause, size } = req.body;
  recordSchema
    .updateOne({ _id: id }, { $set: { name, lastname, rut, phone, ubication, date, hour, TDI, cause, size } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
// delete a record
router.delete("/records/:id", (req, res) => {
  const { id } = req.params;
  recordSchema
  .findByIdAndRemove(id)
  .then((data) => res.json(data))
  .catch((error) => res.json({ message: error }));
});
module.exports = router;