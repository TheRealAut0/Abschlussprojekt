const Accessory = require("../models/accessoryModel");


// Alle Zubehörteile abrufen
exports.getAccessories = async (req, res) => {
  try {
    const accessories = await Accessory.getAllAccessories();
    res.json(accessories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAccessoriesByhardwareId = async (req, res) => {
  const { id } = req.params;
  try {
    const accessories = await Accessory.getAllAccessoriesByhardwareId(id);
    if(accessories.length < 1) return res.status(404).json({ error: "Accessories not found" });
    res.json(accessories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Neues Zubehör erstellen
exports.createAccessory = async (req, res) => {
  const { name, hardware_id, user_id } = req.body;
  try {
    const newAccessory = await Accessory.createAccessory(name, hardware_id, user_id);
    res.status(201).json(newAccessory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Zubehör anhand der ID abrufen
exports.getAccessoryById = async (req, res) => {
  const { id } = req.params;
  try {
    const accessory = await Accessory.getAccessoryById(id);
    if (!accessory) return res.status(404).json({ error: "Accessory not found" });
    res.json(accessory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Zubehör aktualisieren
exports.updateAccessory = async (req, res) => {
  const { id } = req.params;
  const { name, hardware_id } = req.body;
  try {
    const updatedAccessory = await Accessory.updateAccessory(id, name, hardware_id);
    if (!updatedAccessory) return res.status(404).json({ error: "Accessory not found" });
    res.json({ message: "Accessory updated", accessory: updatedAccessory });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Zubehör löschen
exports.deleteAccessory = async (req, res) => {
  const { id } = req.params;
  try {
    await Accessory.deleteAccessory(id);
    res.json({ message: "Accessory deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
