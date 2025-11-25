const db = require("../config/db");

class History {

  static async getAllhistories() {
    const [rows] = await db.query("SELECT * FROM history order by timestamp desc");
    return rows;
  }


  static async getAllHistoriesList() {
    const [rows] = await db.query(
      `SELECT h.id as id, u.first_name as first_name, 
      u.last_name as last_name, 
       DATE_FORMAT(h.timestamp, '%d.%m.%Y') as date  ,TIME(h.timestamp) as time,
      m.name as manufacturer_name, hi.serial_number as serial_number,
      h.description as description, ha.aktion,
      CONCAT(m.name, '-', hi.serial_number) AS HerstSN,
      CONCAT(u.first_name, ' ', u.last_name) AS user_fullname
      FROM history h 
      left join user u on h.user_id = u.id
      left join hardware_inventory hi on h.hardware_id = hi.id
      left join hardware_data hd on hi.hardware_data_id = hd.id
      left join manufacturer m on hd.manufacturer_id = m.id
      left join histroy_aktion ha on h.aktion_id = ha.id
      order by h.timestamp desc;`
    );
    return rows;
  }

  static async createHistory(user_id, hardware_id, aktion_id, description, timestamp) {
    const [result] = await db.query(
      "INSERT INTO history (user_id , hardware_id, aktion_id, description, timestamp) VALUES (?, ?, ?, ?, ?)",
      [user_id, hardware_id, aktion_id, description, timestamp]
    );
    return { id: result.insertId, user_id, hardware_id, aktion_id, description, timestamp};
  }


  static async getHistoryById(id) {
    const [rows] = await db.query("SELECT * FROM history WHERE id = ?", [id]);
    return rows[0];
  }

  static async getHistroyListById(id) {
    const [rows] = await db.query( `SELECT h.id as id, u.first_name as first_name, 
      u.last_name as last_name, 
       DATE_FORMAT(h.timestamp, '%d.%m.%Y') as date  ,TIME(h.timestamp) as time,
      m.name as manufacturer_name, hi.serial_number as serial_number,
      h.description as description, ha.aktion
      FROM history h 
      left join user u on h.user_id = u.id
      left join hardware_inventory hi on h.hardware_id = hi.id
      left join hardware_data hd on hi.hardware_data_id = hd.id
      left join manufacturer m on hd.manufacturer_id = m.id
      left join histroy_aktion ha on h.aktion_id = ha.id
      where h.id = ?
      order by h.timestamp desc;`, [id]);
    return rows[0];
  }

  static async updateHistory(user_id, hardware_id, aktion_id, description, timestamp, id) {
    const [result] = await db.query(
      "UPDATE history SET user_id = ?, hardware_id = ?, aktion_id = ?, description = ?, timestamp = ? WHERE id = ?",
      [user_id, hardware_id, aktion_id, description, timestamp, id]
    );
    if (result.affectedRows === 0) return null;
    return { id, user_id, hardware_id, aktion_id, description, timestamp};
  }

  static async deleteHistory(id) {
    await db.query("DELETE FROM history WHERE id = ?", [id]);
  }
}

module.exports = History;
