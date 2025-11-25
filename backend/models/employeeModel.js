const db = require("../config/db");

class Employee {
  // Alle Mitarbeiter abrufen
  static async getAllEmployees() {
    const [rows] = await db.query("SELECT * FROM employee");
    return rows;
  }

  // Einen neuen Mitarbeiter erstellen
  static async createEmployee(first_name, last_name, email) {
    const [result] = await db.query(
      "INSERT INTO employee (first_name, last_name, email) VALUES (?, ?, ?)",
      [first_name, last_name, email]
    );
    return { id: result.insertId, first_name, last_name, email };
  }

  // Mitarbeiter anhand der ID abrufen
  static async getEmployeeById(id) {
    const [rows] = await db.query("SELECT * FROM employee WHERE id = ?", [id]);
    return rows[0];
  }

  static async updateEmployee(id, first_name, last_name, email) {
    const [existingEmployee] = await db.query(
      "SELECT * FROM employee WHERE id = ?",
      [id]
    );

    const [result] = await db.query(
      "UPDATE employee SET first_name = ?, last_name = ?, email = ? WHERE id = ?",
      [first_name, last_name, email, id]
    );

    return { id, first_name, last_name, email };
  }
  
  // Einen Mitarbeiter löschen
  static async deleteEmployee(id) {
    await db.query("DELETE FROM employee WHERE id = ?", [id]);
  }
}
module.exports = Employee;
