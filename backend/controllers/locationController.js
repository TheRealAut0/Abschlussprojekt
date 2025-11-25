const Location = require('../models/locationModel');

exports.getAllLocations = async (req, res) => {
  try {
    const locations = await Location.getAll();
    res.json(locations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getLocationById = async (req, res) => {
  try {
    const location = await Location.getById(req.params.id);
    if (!location) return res.status(404).json({ message: 'Location not found' });
    res.json(location);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createLocation = async (req, res) => {
  try {
    const { name } = req.body;
    const newLocation = await Location.create(name);
    res.status(201).json(newLocation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateLocation = async (req, res) => {
  try {
    const { name } = req.body;
    await Location.update(req.params.id, name);
    res.json({ id: req.params.id, name });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteLocation = async (req, res) => {
  try {
    await Location.delete(req.params.id);
    res.json({ message: 'Location deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
