const express = require("express");
const router = express.Router();
const FeatureFlag = require("../models/FeatureFlag");

// Show all flags
router.get("/", async (req, res) => {
  const flags = await FeatureFlag.find();
  res.render("index", { flags });
});

// Show create form
router.get("/new", (req, res) => {
  res.render("create");
});

// Create a flag
router.post("/", async (req, res) => {
  try {
    const flag = new FeatureFlag(req.body);
    await flag.save();
    res.redirect("/flags");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Show edit form
router.get("/edit/:id", async (req, res) => {
  const flag = await FeatureFlag.findById(req.params.id);
  if (!flag) return res.redirect("/flags");
  res.render("edit", { flag });
});

// Update a flag
router.post("/update/:id", async (req, res) => {
  try {
    await FeatureFlag.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/flags");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a flag
router.post("/delete/:id", async (req, res) => {
  try {
    await FeatureFlag.findByIdAndDelete(req.params.id);
    res.redirect("/flags");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
