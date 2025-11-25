const db = require('../config/db');

class AnalyzeQuery {
  
  // Alle Queries abrufen
  static async getAll() {
    const [rows] = await db.query('SELECT * FROM analyze_query');
    return rows;
  }



  static async getAnalyzeResultDB(query) {
    const [rows] = await db.query(query);
    return rows;
  }



  // Eine Query abrufen
  static async getById(id) {
    const [rows] = await db.query('SELECT * FROM analyze_query WHERE id = ?', [id]);
    return rows[0];
  }

  // Neue Query erstellen
  static async create(title, sql_query) {
    const [result] = await db.query('INSERT INTO analyze_query (title, sql_query, created_at) VALUES (?, ?, NOW())', [title, sql_query]);
    return { id: result.insertId, title, sql_query };
  }

  // Eine Query aktualisieren
  static async update(id, title, sql_query) {
    await db.query('UPDATE analyze_query SET title = ?, sql_query = ? WHERE id = ?', [title, sql_query, id]);
    return { id, title, sql_query };
  }

  // Eine Query löschen
  static async delete(id) {
    await db.query('DELETE FROM analyze_query WHERE id = ?', [id]);
    return { message: 'Query deleted successfully' };
  }
}

module.exports = AnalyzeQuery;
