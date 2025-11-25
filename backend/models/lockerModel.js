const db = require("../config/db");

class Locker {
  // Alle Locker abrufen
  static async getAllLockers() {
    const [rows] = await db.query("SELECT * FROM locker");
    return rows;
  }

  // Einen neuen Locker erstellen
  static async createLocker(label, location_id) {
    const [result] = await db.query(
      "INSERT INTO locker (label, location_id) VALUES (?, ?)",
      [label, location_id]
    );
    return { id: result.insertId, label, location_id };
  }

  // Locker anhand der ID abrufen
  static async getLockerById(id) {
    const [rows] = await db.query("SELECT * FROM locker WHERE id = ?", [id]);
    return rows[0];
  }

 // Locker aktualisieren
  static async updateLocker(id, label, location_id) {
        const [result] = await db.query(
          "UPDATE locker SET label = ?, location_id = ? WHERE id = ?",
          [label, location_id, id]
        );
        if (result.affectedRows === 0) return null; // Falls kein Eintrag aktualisiert wurde
        return { id, label, location_id };
      }
  

  // Einen Locker löschen
  static async deleteLocker(id) {
    await db.query("DELETE FROM locker WHERE id = ?", [id]);
  }
}

module.exports = Locker;
