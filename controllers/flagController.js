const FeatureFlag = require("../models/FeatureFlag");
const Joi = require("joi");

// Async error handler middleware
const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

// Joi schema for validation
const flagSchema = Joi.object({
  name: Joi.string().required(),
  isActive: Joi.boolean().required(),
});

// Create a new feature flag
exports.createFlag = asyncHandler(async (req, res) => {
  const { error } = flagSchema.validate(req.body);
  if (error)
    return res
      .status(400)
      .json({ success: false, message: error.details[0].message });

  const flag = new FeatureFlag(req.body);
  await flag.save();
  res.status(201).json({
    success: true,
    data: flag,
    message: "Feature flag created successfully",
  });
});

// Get all feature flags
exports.getFlags = asyncHandler(async (req, res) => {
  const flags = await FeatureFlag.find();
  res.json({ success: true, data: flags });
});

// Get a feature flag by ID
exports.getFlagById = asyncHandler(async (req, res) => {
  const flag = await FeatureFlag.findById(req.params.id);
  if (!flag)
    return res
      .status(404)
      .json({ success: false, message: "Feature flag not found" });

  res.json({ success: true, data: flag });
});

// Update a feature flag
exports.updateFlag = asyncHandler(async (req, res) => {
  const { error } = flagSchema.validate(req.body);
  if (error)
    return res
      .status(400)
      .json({ success: false, message: error.details[0].message });

  const flag = await FeatureFlag.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!flag)
    return res
      .status(404)
      .json({ success: false, message: "Feature flag not found" });

  res.json({
    success: true,
    data: flag,
    message: "Feature flag updated successfully",
  });
});

// Delete a feature flag
exports.deleteFlag = asyncHandler(async (req, res) => {
  const flag = await FeatureFlag.findByIdAndDelete(req.params.id);
  if (!flag)
    return res
      .status(404)
      .json({ success: false, message: "Feature flag not found" });

  res.json({ success: true, message: "Feature flag deleted successfully" });
});
