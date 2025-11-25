const HardwareDataModel = require("../models/hardwareDataModel");

// Alle Hardware-Daten abrufen
exports.getAllHardwareData = async (req, res) => {
  try {
    const hardwareData = await HardwareDataModel.getAllHardwareData();
    res.json(hardwareData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.getAllHardwareDataList = async (req, res) => {
    try {
      const hardwareData = await HardwareDataModel.getAllHardwareDataList();
      res.json(hardwareData);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

// Einzelnes Hardware-Datum abrufen
exports.getHardwareDataById = async (req, res) => {
  const { id } = req.params;
  try {
    const hardware = await HardwareDataModel.getHardwareDataById(id);
    if (!hardware) return res.status(404).json({ error: "Hardware-Datum nicht gefunden" });
    res.json(hardware);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Neues Hardware-Datum erstellen
exports.createHardwareData = async (req, res) => {
  const { name, operating_system_id, manufacturer_id } = req.body;
  try {
    const newHardwareData = await HardwareDataModel.createHardwareData(name, operating_system_id, manufacturer_id);
    res.status(201).json(newHardwareData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Hardware-Datum aktualisieren
exports.updateHardwareData = async (req, res) => {
  const { id } = req.params;
  const updatedFields = req.body;
  
  try {
    const updatedHardwareData = await HardwareDataModel.updateHardwareData(id, updatedFields);
    res.json({ message: "Hardware-Datum erfolgreich aktualisiert", hardware_data: updatedHardwareData });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Hardware-Datum löschen
exports.deleteHardwareData = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await HardwareDataModel.deleteHardwareData(id);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
