const FeatureFlag = require("../models/FeatureFlag");

exports.createFlag = async (req, res) => {
  try {
    const flag = new FeatureFlag(req.body);
    await flag.save();
    res.status(201).json(flag);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getFlags = async (req, res) => {
  try {
    const flags = await FeatureFlag.find();
    res.json(flags);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getFlagById = async (req, res) => {
  try {
    const flag = await FeatureFlag.findById(req.params.id);
    if (!flag)
      return res.status(404).json({ message: "Feature flag not found" });
    res.json(flag);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateFlag = async (req, res) => {
  try {
    const flag = await FeatureFlag.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!flag)
      return res.status(404).json({ message: "Feature flag not found" });
    res.json(flag);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteFlag = async (req, res) => {
  try {
    const flag = await FeatureFlag.findByIdAndDelete(req.params.id);
    if (!flag)
      return res.status(404).json({ message: "Feature flag not found" });
    res.json({ message: "Feature flag deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
