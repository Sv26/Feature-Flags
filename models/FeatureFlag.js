const mongoose = require("mongoose");

const featureFlagSchema = new mongoose.Schema({
  name: { type: String, unique: true, required: true },
  description: { type: String },
  isEnabled: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("FeatureFlag", featureFlagSchema);
