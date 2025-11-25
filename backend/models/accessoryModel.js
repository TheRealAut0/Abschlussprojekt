const db = require("../config/db");
const History = require("../models/historyModel");

class Accessory {
  // Alle Zubehörteile abrufen
  static async getAllAccessories() {
    const [rows] = await db.query("SELECT * FROM accessory");
    return rows;
  }


  static async getAllAccessoriesByhardwareId(id) {
    const [rows] = await db.query("SELECT * FROM accessory WHERE hardware_id = ?" , [id]);
    return rows;
  }

  // Neues Zubehör erstellen
  static async createAccessory(name, hardware_id, user_id) {
    const [result] = await db.query(
      "INSERT INTO accessory (name, hardware_id) VALUES (?, ?)",
      [name, hardware_id]
    );
    await History.createHistory(user_id, hardware_id , 1 ,`Neue Zubehör hinzugefügt: ${name}`)
    return { id: result.insertId, name, hardware_id };
  }

  // Zubehör anhand der ID abrufen
  static async getAccessoryById(id) {
    const [rows] = await db.query("SELECT * FROM accessory WHERE id = ?", [id]);
    return rows[0];
  }

  // Zubehör aktualisieren
  static async updateAccessory(id, name, hardware_id) {
    const [result] = await db.query(
      "UPDATE accessory SET name = ?, hardware_id = ? WHERE id = ?",
      [name, hardware_id, id]
    );
    if (result.affectedRows === 0) return null;
    return { id, name, hardware_id };
  }

  // Zubehör löschen
  static async deleteAccessory(id) {
    await db.query("DELETE FROM accessory WHERE id = ?", [id]);
  }
}

module.exports = Accessory;
