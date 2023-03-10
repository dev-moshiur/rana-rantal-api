const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const Admin = require("../models/Admin");
router.post("/", async (req, res) => {
  const single = new Admin(req.body);
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
    const updated = await Admin.findByIdAndUpdate(
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
    const result = await Admin.find({ ...req.query });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});
//Get All
router.get("/", async (req, res) => {
  try {
    const result = await Admin.find().sort({ createdAt: "ascending" });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});
//Get one
router.get("/:id", async (req, res) => {
  try {
    const result = await Admin.findById(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});
//delete
router.delete("/:id", async (req, res) => {
  try {
    await Admin.findByIdAndDelete(req.params.id);
    res.status(200).json("Admin Has Been Deleted");
  } catch (error) {
    res.status(500).json(error);
  }
});
module.exports = router;
