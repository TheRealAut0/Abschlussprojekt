const db = require("../config/db");

class Role {
  static async getAllRoles() {
    const [rows] = await db.query("SELECT * FROM roles");
    return rows;
  }

  static async getRoleById(id) {
    const [rows] = await db.query("SELECT * FROM roles WHERE id = ?", [id]);
    return rows[0];
  }

  static async getRoleByName(name) {
    const [rows] = await db.query("SELECT * FROM roles WHERE name = ?", [name]);
    return rows[0];
  }

  static async createRole(name) {
    const [result] = await db.query("INSERT INTO roles (name) VALUES (?)", [name]);
    return { id: result.insertId, name };
  }

  static async updateRole(id, name) {
    const [result] = await db.query("UPDATE roles SET name = ? WHERE id = ?", [name, id]);
    if (result.affectedRows === 0) return null;
    return { id, name };
  }

  static async deleteRole(id) {
    await db.query("DELETE FROM roles WHERE id = ?", [id]);
  }
}

module.exports = Role;
