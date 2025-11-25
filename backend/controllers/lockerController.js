const Locker = require("../models/lockerModel");

// Alle Locker abrufen
exports.getLockers = async (req, res) => {
  try {
    const lockers = await Locker.getAllLockers();
    res.json(lockers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Neuen Locker erstellen
exports.createLocker = async (req, res) => {
  const { label, location_id } = req.body;
  try {
    const newLocker = await Locker.createLocker(label, location_id);
    res.status(201).json(newLocker);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Locker anhand der ID abrufen
exports.getLockerById = async (req, res) => {
  const { id } = req.params;
  try {
    const locker = await Locker.getLockerById(id);
    if (!locker) return res.status(404).json({ error: "Locker not found" });
    res.json(locker);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Locker aktualisieren
exports.updateLocker = async (req, res) => {
    const { id } = req.params;
    const { label, location_id } = req.body;
    try {
      const updatedLocker = await Locker.updateLocker(id, label, location_id);
      if (!updatedLocker) return res.status(404).json({ error: "Locker not found" });
      res.json({ message: "Locker updated", locker: updatedLocker });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

// Einen Locker löschen
exports.deleteLocker = async (req, res) => {
  const { id } = req.params;
  try {
    await Locker.deleteLocker(id);
    res.json({ message: "Locker deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
