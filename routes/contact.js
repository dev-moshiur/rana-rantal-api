const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");
router.post("/", async (req, res) => {
  const single = new Contact(req.body);
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
    const updated = await Contact.findByIdAndUpdate(
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
    const result = await Contact.find({ ...req.query });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});
//Get All
router.get("/", async (req, res) => {
  try {
    const result = await Contact.find().sort({ createdAt: "ascending" });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});
//Get one
router.get("/:id", async (req, res) => {
  try {
    const result = await Contact.findById(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});
//delete
router.delete("/:id", async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.status(200).json("Contact Has Been Deleted");
  } catch (error) {
    res.status(500).json(error);
  }
});
module.exports = router;
