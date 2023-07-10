const express = require("express");
const inventorySchema = require("../models/inventory");
const { removeAllListeners } = require("nodemon");
const router = express.Router();
// create inventory
router.post("/inventory", (req, res) => {
  const inventory = inventorySchema(req.body);
  inventory
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
//get all inventory
router.get('/inventory', (req, res) => {
  inventorySchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
//Mostrar un inventario
// get a inventory
router.get("/inventory/:id", (req, res) => {
  const { id } = req.params;
  inventorySchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
// update a inventory
router.put("/inventory/:id", (req, res) => {
  const { id } = req.params;
  const { product_name, product_code, product_description, quantity_available, acquisition_date_supplier } = req.body;
  inventorySchema
    .updateOne({ _id: id }, { $set: { product_name, product_code, product_description, quantity_available, acquisition_date_supplier } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
// delete a inventory
router.delete("/inventory/:id", (req, res) => {
  const { id } = req.params;
  inventorySchema
  .findByIdAndRemove(id)
  .then((data) => res.json(data))
  .catch((error) => res.json({ message: error }));
});
module.exports = router;