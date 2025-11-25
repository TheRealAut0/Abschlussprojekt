const db = require("../config/db");

class HardwareDataModel {
  
  // Alle Hardware-Daten abrufen
  static async getAllHardwareData() {
    const [rows] = await db.query("SELECT * FROM hardware_data");
    return rows;
  }

  static async getAllHardwareDataList() {
    const [rows] = await db.query(`
        SELECT 
    hardware_data.id, 
    hardware_data.name AS hardware_name, 
    hardware_data.manufacturer_id, 
    manufacturer.name AS manufacturer_name, 
    hardware_data.operating_system_id, 
    operating_system.name AS operating_system_name   
FROM hardware_data
LEFT JOIN manufacturer 
    ON hardware_data.manufacturer_id = manufacturer.id
LEFT JOIN operating_system  
    ON hardware_data.operating_system_id = operating_system.id;`);
    return rows;
  }

  // Einzelnes Hardware-Datum abrufen
  static async getHardwareDataById(id) {
    const [rows] = await db.query("SELECT * FROM hardware_data WHERE id = ?", [id]);
    return rows[0];
  }

  // Neues Hardware-Datum erstellen
  static async createHardwareData(name, operating_system_id, manufacturer_id) {
    const [result] = await db.query(
      "INSERT INTO hardware_data (name, operating_system_id, manufacturer_id) VALUES (?, ?, ?)",
      [name, operating_system_id, manufacturer_id]
    );

    return { id: result.insertId, name, operating_system_id, manufacturer_id };
  }

  // Hardware-Datum aktualisieren
  static async updateHardwareData(id, updatedFields) {
    const fields = Object.keys(updatedFields);
    const values = Object.values(updatedFields);

    if (fields.length === 0) {
      throw new Error("Keine Daten zum Aktualisieren bereitgestellt.");
    }

    const setClause = fields.map(field => `${field} = ?`).join(", ");
    values.push(id);

    const query = `UPDATE hardware_data SET ${setClause} WHERE id = ?`;
    const [result] = await db.query(query, values);

    if (result.affectedRows === 0) {
      throw new Error("Hardware-Datum nicht gefunden oder keine Änderungen vorgenommen.");
    }

    return { id, ...updatedFields };
  }

  // Hardware-Datum löschen
  static async deleteHardwareData(id) {
    const [result] = await db.query("DELETE FROM hardware_data WHERE id = ?", [id]);
    if (result.affectedRows === 0) {
      throw new Error("Hardware-Datum nicht gefunden.");
    }
    return { message: "Hardware-Datum erfolgreich gelöscht" };
  }
}

module.exports = HardwareDataModel;
