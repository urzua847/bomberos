const express = require("express");
const notificationSchema = require("../models/notification");
const router = express.Router();
// create  notification
router.post("/notifications", (req, res) => {
  const notification = notificationSchema(req.body);
  notification
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
// get all notification
router.get("/notifications", (req, res) => {
  notificationSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
// get a notification
router.get("/notifications/:id", (req, res) => {
  const { id } = req.params;
  notificationSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
// update a notification
router.put("/notifications/:id", (req, res) => {
  const { id } = req.params;
  const { tipe, date, hour, ubication, gravity_level, actual_state, additional_information } = req.body;
  notificationSchema
    .updateOne({ _id: id }, { $set: { tipe, date, hour, ubication, gravity_level, actual_state, additional_information } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
// delete a notification
router.delete("/notifications/:id", (req, res) => {
  const { id } = req.params;
  notificationSchema
    .findByIdAndRemove(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
//Routesnpm run
module.exports = router;
