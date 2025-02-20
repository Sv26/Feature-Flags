const express = require("express");
const router = express.Router();
const FeatureFlag = require("../models/FeatureFlag");

// Show all flags
router.get("/", async (req, res) => {
  try {
    const flags = await FeatureFlag.find();
    res.render("index", { flags });
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve feature flags." });
  }
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
  try {
    const flag = await FeatureFlag.findById(req.params.id);
    if (!flag)
      return res.status(404).json({ message: "Feature flag not found" });
    res.render("edit", { flag });
  } catch (error) {
    res.status(500).json({ message: "Error retrieving feature flag." });
  }
});

// Update a flag (Use PUT instead of POST)
router.put("/:id", async (req, res) => {
  try {
    const updatedFlag = await FeatureFlag.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedFlag)
      return res.status(404).json({ message: "Feature flag not found" });
    res.redirect("/flags");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a flag (Use DELETE instead of POST)
router.delete("/:id", async (req, res) => {
  try {
    const deletedFlag = await FeatureFlag.findByIdAndDelete(req.params.id);
    if (!deletedFlag)
      return res.status(404).json({ message: "Feature flag not found" });
    res.redirect("/flags");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
