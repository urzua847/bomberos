const express = require("express");
const supportAlertSchema = require("../models/supportAlert");
const router = express.Router();
// create supportAlert
router.post("/supportAlert", (req, res) => {
  const supportAlert = supportAlertSchema(req.body);
  supportAlert
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
// get all supportAlert
router.get("/supportAlert", (req, res) => {
  supportAlertSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
// get a supportAlert
router.get("/supportAlert/:id", (req, res) => {
  const { id } = req.params;
  supportAlertSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
// update a // delete a supportAlertsupportAlert

router.put("/supportAlert/:id", (req, res) => {
  const { id } = req.params;
  const { name, age, email } = req.body;
  supportAlertSchema
    .updateOne({ _id: id }, { $set: { name, age, email } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
router.delete("/supportAlert/:id", (req, res) => {
  const { id } = req.params;
  supportAlertSchema
    .findByIdAndRemove(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
//Routesnpm run
module.exports = router;
