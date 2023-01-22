const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const Car = require("../models/Car");
router.post("/", async (req, res) => {
  const single = new Car(req.body);
  try {
    let saved = await single.save();
    res.status(200).json(saved);
  } catch (error) {
    res.status(500).json(error);
  }
});
//Update
router.put(":id", async (req, res) => {
  try {
    const updated = await Car.findByIdAndUpdate(
      req.params.id,
      { set: req.body },
      { new: true }
    );
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json(error);
  }
});
//Get Some
router.get("/", async (req, res) => {
  try {
    const result = await Car.find({ ...req.query });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});
//Get All
router.get("/", async (req, res) => {
  try {
    const result = await Car.find().sort({ createdAt: "ascending" });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});
//Get one
router.get("/:id", async (req, res) => {
  try {
    const result = await Car.findById(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});
//delete
router.delete("/:id", async (req, res) => {
  try {
    await Car.findByIdAndDelete(req.params.id);
    res.status(200).json("Car Has Been Deleted");
  } catch (error) {
    res.status(500).json(error);
  }
});
module.exports = router;
