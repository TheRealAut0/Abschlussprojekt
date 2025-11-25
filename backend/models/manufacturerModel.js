const db = require('../config/db');

class Manufacturer {
  
  // Alle Hersteller abrufen
  static async getAll() {
    const [rows] = await db.query('SELECT * FROM manufacturer');
    return rows;
  }

  // Einen Hersteller abrufen
  static async getById(id) {
    const [rows] = await db.query('SELECT * FROM manufacturer WHERE id = ?', [id]);
    return rows[0];
  }

  // Neuen Hersteller erstellen
  static async create(name) {
    const [result] = await db.query('INSERT INTO manufacturer (name) VALUES (?)', [name]);
    return { id: result.insertId, name };
  }

  // Einen Hersteller aktualisieren
  static async update(id, name) {
    await db.query('UPDATE manufacturer SET name = ? WHERE id = ?', [name, id]);
    return { id, name };
  }

  // Einen Hersteller löschen
  static async delete(id) {
    await db.query('DELETE FROM manufacturer WHERE id = ?', [id]);
    return { message: 'Manufacturer deleted successfully' };
  }
}

module.exports = Manufacturer;
