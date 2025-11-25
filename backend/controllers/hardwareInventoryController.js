const HardwareInventory = require("../models/hardwareInventoryModel");
const HardwareService = require("../services/hardwareService");
const { itemsformatDateToGerman, singleItemformatDateToGerman } = require("../utils/dateFormatter");


// Alle Hardware-Einträge abrufen
exports.getHardwareInventory = async (req, res) => {
  try {
    const hardwareInventory = await HardwareInventory.getAllHardware();
    const formattedItems = itemsformatDateToGerman(hardwareInventory);
    res.json(formattedItems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



exports.getHardwareList = async (req, res) => {
  try {
    const hardwareList = await HardwareInventory.getAllHardwareList();
    const formattedItems = itemsformatDateToGerman(hardwareList);
    res.json(formattedItems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Einzelnes Hardware-Element abrufen
exports.getHardwareInventoryById = async (req, res) => {
  const { id } = req.params;
  try {
    const hardware = await HardwareInventory.getHardwareInventoryById(id);
    if (!hardware) return res.status(404).json({ error: "Hardware nicht gefunden" });
    const formattedItem = singleItemformatDateToGerman(hardware);
    res.json(formattedItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Einzelnes Hardware-Element abrufen
exports.getHardwareListById = async (req, res) => {
  const { id } = req.params;
  try {
    const hardware = await HardwareInventory.getAllHardwareListById(id);
    if (!hardware) return res.status(404).json({ error: "Hardware nicht gefunden" });
    const formattedItem = singleItemformatDateToGerman(hardware);
    res.json(formattedItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Neue Hardware erstellen
exports.createHardwareInventory = async (req, res) => {
  const { 
    hardware_data_id, 
    serial_number, 
    status_id, 
    delivery_date, 
    imei, 
    locker_id, 
    delivery_note_date, 
    budget_aligned, 
    employee_id, 
    lends_out_at, 
    user_id, 
    accessories 
  } = req.body;

  try {
    const isEmpty = (val) => val === null || val === undefined || val === '';
    
    if (status_id == 2 && (isEmpty(lends_out_at) || isEmpty(employee_id))) {
      return res.status(400).json({ error: "Columns 'lends_out_at' and 'employee_id' cannot be null" });
    }
    if (status_id == 1 && (!isEmpty(lends_out_at) || !isEmpty(employee_id))) {
      return res.status(400).json({ error: "Columns 'lends_out_at' and 'employee_id' must be null" });
    }
    if (status_id == 3 && (!isEmpty(lends_out_at) || !isEmpty(employee_id))) {
      return res.status(400).json({ error: "Columns 'lends_out_at' and 'employee_id' must be null" });
    }
    const newHardware = await HardwareInventory.createHardwareInventory(
      hardware_data_id, 
      serial_number, 
      status_id, 
      delivery_date, 
      imei, 
      locker_id, 
      delivery_note_date, 
      budget_aligned, 
      employee_id, 
      lends_out_at, 
      user_id, 
      accessories
    );

    res.status(201).json(newHardware);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



// Hardware aktualisieren
exports.updateHardwareInventory = async (req, res) => {
  const { id } = req.params;
  const { user_id, ...newData } = req.body; // user_id extrahieren

  const isEmpty = (val) => val === null || val === undefined || val === '';
    
    if (newData.status_id == 2 && (isEmpty(newData.lends_out_at) || isEmpty(newData.employee_id))) {
      return res.status(400).json({ error: "Columns 'lends_out_at' and 'employee_id' cannot be null" });
    }
    if (newData.status_id == 1 && (!isEmpty(newData.lends_out_at) || !isEmpty(newData.employee_id))) {
      return res.status(400).json({ error: "Columns 'lends_out_at' and 'employee_id' must be null" });
    }
    if (newData.status_id == 3 && (!isEmpty(newData.lends_out_at) || !isEmpty(newData.employee_id))) {
      return res.status(400).json({ error: "Columns 'lends_out_at' and 'employee_id' must be null" });
    }
  try {
    const updatedHardware = await HardwareService.updateHardware(user_id, id, newData);
    if (!updatedHardware) return res.status(404).json({ error: "Hardware nicht gefunden" });

    res.json({ message: "Hardware erfolgreich aktualisiert", hardware: updatedHardware });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Hardware löschen
exports.deleteHardwareInventory = async (req, res) => {
  const { id } = req.params;
  const { user_id } = req.body;
  try {
    await HardwareInventory.deleteHardwareInventory(id, user_id);
    res.json({ message: "Hardware erfolgreich gelöscht" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
