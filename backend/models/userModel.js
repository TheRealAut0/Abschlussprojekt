const db = require("../config/db");

class User {
  static async getAllUsers() {
    // return users with role_id only; name lookup can be done separately
    const [rows] = await db.query("SELECT * FROM user");
    return rows;
  }

  static async createUser(email, password, first_name, last_name, role_id = null) {
    if (role_id === null || typeof role_id === 'undefined') {
      const [result] = await db.query(
        "INSERT INTO user (email,password, first_name, last_name) VALUES (?, ?, ?, ?)",
        [email, password, first_name, last_name]
      );
      return { id: result.insertId, email, first_name, last_name };
    }
    const [result] = await db.query(
      "INSERT INTO user (email,password, first_name, last_name, role_id) VALUES (?, ?, ?, ?, ?)",
      [email, password, first_name, last_name, role_id]
    );
    return { id: result.insertId, email, first_name, last_name, role_id };
  }

  static async updateUser(id, {email, password, first_name, last_name, role_id }) {
    const query = "UPDATE user SET email = ?, password = ?, first_name = ?, last_name = ?, role_id = ? WHERE id = ?";
    const [result] = await db.query(query, [email, password, first_name, last_name, role_id, id]);
    if (result.affectedRows === 0) return null;
    return { id, email, password, first_name, last_name, role_id };
}

  static async getUserById(id) {
    const [rows] = await db.query("SELECT * FROM user WHERE id = ?", [id]);
    return rows[0];
  }

  static async deleteUser(id) {
    await db.query("DELETE FROM user WHERE id = ?", [id]);
  }
}

module.exports = User;
