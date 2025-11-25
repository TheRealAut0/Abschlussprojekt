const HardwareStatus = require('../models/hardwareStatusModel');

exports.getAllStatuses = async (req, res) => {
  try {
    const statuses = await HardwareStatus.getAll();
    res.json(statuses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getStatusById = async (req, res) => {
  try {
    const status = await HardwareStatus.getById(req.params.id);
    if (!status) return res.status(404).json({ message: 'Hardware status not found' });
    res.json(status);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const newStatus = await HardwareStatus.create(status);
    res.status(201).json(newStatus);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateStatus = async (req, res) => {
  try {
    const { status } = req.body;
    await HardwareStatus.update(req.params.id, status);
    res.json({ id: req.params.id, status });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteStatus = async (req, res) => {
  try {
    await HardwareStatus.delete(req.params.id);
    res.json({ message: 'Hardware status deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
