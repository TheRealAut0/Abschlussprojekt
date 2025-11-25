const History = require("../models/historyModel");

// Alle Zubehörteile abrufen
exports.getHistories = async (req, res) => {
  try {
    const history = await History.getAllhistories();
    res.json(history);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Alle Zubehörteile abrufen
exports.getHistoriesList = async (req, res) => {
  try {
    const history = await History.getAllHistoriesList();
    res.json(history);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Neues Zubehör erstellen
exports.createHistory = async (req, res) => {
  const { user_id, hardware_id, aktion_id, description, timestamp} = req.body;
  try {
    const newHistory= await History.createHistory(user_id, hardware_id, aktion_id, description, timestamp);
    res.status(201).json(newHistory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Zubehör anhand der ID abrufen
exports.getHistroyById = async (req, res) => {
  const { id } = req.params;
  try {
    const history = await History.getHistoryById(id);
    if (!history) return res.status(404).json({ error: "History not found" });
    res.json(history);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.getHistroyListById = async (req, res) => {
  const { id } = req.params;
  try {
    const history = await History.getHistroyListById(id);
    if (!history) return res.status(404).json({ error: "History not found" });
    res.json(history);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Zubehör aktualisieren
exports.updateHistory = async (req, res) => {
  const { id } = req.params;
  const { user_id, hardware_id, aktion, description, timestamp} = req.body;
  try {
    const updatedHistroy = await History.updateHistory(user_id, hardware_id, aktion, description, timestamp, id);
    if (!updatedHistroy) return res.status(404).json({ error: "History not found" });
    res.json({ message: "History updated", history: updatedHistroy });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Zubehör löschen
exports.deleteHistory = async (req, res) => {
  const { id } = req.params;
  try {
    await History.deleteHistory(id);
    res.json({ message: "History deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
