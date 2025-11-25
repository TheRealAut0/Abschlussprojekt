const db = require("../config/db");

class User {
  static async getAllUsers() {
    const [rows] = await db.query("SELECT * FROM user");
    return rows;
  }

  static async createUser(email, password, first_name, last_name) {
    const [result] = await db.query("INSERT INTO user (email,password, first_name, last_name) VALUES (?, ?, ?, ?)", [email, password, first_name, last_name]);
    return { id: result.insertId, email, password, first_name, last_name};
  }

  static async updateUser(id, {email, password, first_name, last_name }) {
    const query = "UPDATE user SET email = ?, password = ?, first_name = ?, last_name = ? WHERE id = ?";
    const [result] = await db.query(query, [email, password, first_name, last_name, id]);
    if (result.affectedRows === 0) return null;
    return { id, email, password, first_name, last_name };
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
