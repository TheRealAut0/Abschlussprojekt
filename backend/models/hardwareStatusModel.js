const db = require('../config/db');

class HardwareStatus {
  
  // Alle Hardware-Status abrufen
  static async getAll() {
    const [rows] = await db.query('SELECT * FROM hardware_status');
    return rows;
  }

  // Einen Hardware-Status abrufen
  static async getById(id) {
    const [rows] = await db.query('SELECT * FROM hardware_status WHERE id = ?', [id]);
    return rows[0];
  }

  // Neuen Hardware-Status erstellen
  static async create(status) {
    const [result] = await db.query('INSERT INTO hardware_status (status) VALUES (?)', [status]);
    return { id: result.insertId, status };
  }

  // Einen Hardware-Status aktualisieren
  static async update(id, status) {
    await db.query('UPDATE hardware_status SET status = ? WHERE id = ?', [status, id]);
    return { id, status };
  }

  // Einen Hardware-Status löschen
  static async delete(id) {
    await db.query('DELETE FROM hardware_status WHERE id = ?', [id]);
    return { message: 'Hardware status deleted successfully' };
  }
}

module.exports = HardwareStatus;
