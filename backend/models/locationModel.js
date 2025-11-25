const db = require('../config/db');

class Location {
  
  // Alle Standorte abrufen
  static async getAll() {
    const [rows] = await db.query('SELECT * FROM location');
    return rows;
  }

  // Einen Standort abrufen
  static async getById(id) {
    const [rows] = await db.query('SELECT * FROM location WHERE id = ?', [id]);
    return rows[0];
  }

  // Neuen Standort erstellen
  static async create(name) {
    const [result] = await db.query('INSERT INTO location (name) VALUES (?)', [name]);
    return { id: result.insertId, name };
  }

  // Einen Standort aktualisieren
  static async update(id, name) {
    await db.query('UPDATE location SET name = ? WHERE id = ?', [name, id]);
    return { id, name };
  }

  // Einen Standort löschen
  static async delete(id) {
    await db.query('DELETE FROM location WHERE id = ?', [id]);
    return { message: 'Location deleted successfully' };
  }
}

module.exports = Location;
