const db = require("../config/db");
const History = require("./historyModel");
const Accessory = require("./accessoryModel");
const HardwareData = require("./hardwareDataModel");

class HardwareInventoryModel {
  
  // Alle Hardware-Daten abrufen
  static async getAllHardware() {
    const [rows] = await db.query("SELECT * FROM hardware_inventory");
    return rows;
  }


  static async getAllHardwareList() {
    const [rows] = await db.query(`
SELECT 
  hi.id, 
  hi.hardware_data_id, 
  hi.serial_number,
  hi.status_id,
  hi.delivery_date, 
  hi.imei, 
  hi.locker_id, 
  hi.delivery_note_date,
  hi.budget_aligned, 
  hi.employee_id, 
  hi.lends_out_at,
  hd.name AS hardware_name, 
  hd.operating_system_id, 
  hd.manufacturer_id,
  m.name AS manufacturer_name, 
  os.name AS operating_system_name,
  l.label AS locker_label, 
  l.location_id AS locker_location_id,
  loc.name AS location_name,
  e.first_name AS employee_first_name, 
  e.last_name AS employee_last_name,
  CONCAT(e.first_name, ' ', e.last_name) AS employee_fullname,
  CONCAT(m.name, '-', hi.serial_number) AS HerstSN,
  hs.status 
FROM hardware_inventory hi
LEFT JOIN hardware_data hd ON hi.hardware_data_id = hd.id
LEFT JOIN manufacturer m ON hd.manufacturer_id = m.id
LEFT JOIN operating_system os ON hd.operating_system_id = os.id
LEFT JOIN locker l ON hi.locker_id = l.id
LEFT JOIN location loc ON l.location_id = loc.id
LEFT JOIN employee e ON hi.employee_id = e.id
LEFT JOIN hardware_status hs ON hi.status_id = hs.id
ORDER BY hi.status_id, l.location_id, hd.manufacturer_id, hd.name;`);
    return rows;
  }

  // Einzelnes Hardware-Element abrufen
  static async getAllHardwareListById(id) {
    const [rows] = await db.query(`
  SELECT 
    hi.id, 
    hi.hardware_data_id, 
    hi.serial_number,
    hi.status_id,
    hi.delivery_date, 
    hi.imei, 
    hi.locker_id, 
    hi.delivery_note_date,
    hi.budget_aligned, 
    hi.employee_id, 
    hi.lends_out_at,
    hd.name AS hardware_name, 
    hd.operating_system_id, 
    hd.manufacturer_id,
    m.name AS manufacturer_name, 
    os.name AS operating_system_name,
    l.label AS locker_label, 
    l.location_id AS locker_location_id,
    loc.name AS location_name,
    e.first_name AS employee_first_name, 
    e.last_name AS employee_last_name,
    hs.status 
FROM hardware_inventory hi
LEFT JOIN hardware_data hd ON hi.hardware_data_id = hd.id
LEFT JOIN manufacturer m ON hd.manufacturer_id = m.id
LEFT JOIN operating_system os ON hd.operating_system_id = os.id
LEFT JOIN locker l ON hi.locker_id = l.id
LEFT JOIN location loc ON l.location_id = loc.id
LEFT JOIN employee e ON hi.employee_id = e.id
LEFT JOIN hardware_status hs ON hi.status_id = hs.id
WHERE hi.id = ?;`, [id]);
    return rows[0];
  }

  static async getHardwareInventoryById(id) {
    const [rows] = await db.query("SELECT * FROM hardware_inventory WHERE id = ?", [id]);
    return rows[0];
  }

  // Neue Hardware erstellen
  static async createHardwareInventory(hardware_data_id, serial_number, status_id, delivery_date, imei,  locker_id, delivery_note_date, budget_aligned, employee_id, lends_out_at, user_id, accessories) {
    const [result] = await db.query(
      "INSERT INTO hardware_inventory (hardware_data_id, serial_number, status_id, delivery_date, imei,  locker_id, delivery_note_date, budget_aligned, employee_id, lends_out_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [hardware_data_id, serial_number, status_id, delivery_date, imei,  locker_id, delivery_note_date, budget_aligned, employee_id, lends_out_at]
    );
    const hardwareData = await HardwareData.getHardwareDataById(hardware_data_id);
    await History.createHistory(user_id, result.insertId, 1, `Neue Hardware hinzugefügt: ${hardwareData.name}`);
    
   
    if(accessories !== undefined ) {
      if(accessories.length > 0){
        for (const accessory of accessories) {
          await Accessory.createAccessory(accessory, result.insertId, user_id);
        }
      }
    }

    return { id: result.insertId, hardware_data_id, serial_number, status_id, delivery_date, imei, locker_id, delivery_note_date, budget_aligned, employee_id, lends_out_at };
  }


  static async updateHardware(id, newData) {
    const fields = Object.keys(newData);
    const values = Object.values(newData);

    if (fields.length === 0) {
      throw new Error("Keine Daten zum Aktualisieren bereitgestellt.");
    }

    const setClause = fields.map(field => `${field} = ?`).join(", ");
    values.push(id);

    const query = `UPDATE hardware_inventory SET ${setClause} WHERE id = ?`;

    const [result] = await db.query(query, values);

    if (result.affectedRows === 0) {
      throw new Error("Hardware nicht gefunden oder keine Änderungen vorgenommen.");
    }

    return { id, ...newData };
  }

  

  // Hardware löschen
  static async deleteHardwareInventory(id, user_id) {
    const [hardware] = await db.query(
      "SELECT hardware_data.name AS name FROM hardware_inventory " +
      "JOIN hardware_data ON hardware_inventory.hardware_data_id = hardware_data.id " +
      "WHERE hardware_inventory.id = ?",
      [id]
    );
    if (hardware.length === 0) return null;

    const hardwareName = hardware[0].name;
    await db.query("DELETE FROM hardware_inventory WHERE id = ?", [id]);

    await History.createHistory(user_id, null, 3, `Hardware gelöscht: ${hardwareName}`);
  }
}

module.exports = HardwareInventoryModel;
