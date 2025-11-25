const Manufacturer = require('../models/manufacturerModel');

exports.getAllManufacturers = async (req, res) => {
  try {
    const manufacturers = await Manufacturer.getAll();
    res.json(manufacturers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getManufacturerById = async (req, res) => {
  try {
    const manufacturer = await Manufacturer.getById(req.params.id);
    if (!manufacturer) return res.status(404).json({ message: 'Manufacturer not found' });
    res.json(manufacturer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createManufacturer = async (req, res) => {
  try {
    const { name } = req.body;
    const newManufacturer = await Manufacturer.create(name);
    res.status(201).json(newManufacturer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateManufacturer = async (req, res) => {
  try {
    const { name } = req.body;
    await Manufacturer.update(req.params.id, name);
    res.json({ id: req.params.id, name });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteManufacturer = async (req, res) => {
  try {
    await Manufacturer.delete(req.params.id);
    res.json({ message: 'Manufacturer deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
