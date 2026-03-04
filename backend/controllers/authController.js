const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
  const { email, password } = req.body;

  // Validate input
  if (!email || !password) {
    // don't reveal which field is missing, just respond generically
    return res.status(400).json({ error: "E-Mail oder Passwort falsch." });
  }

  try {
    // Get user by email (need to fetch with password for comparison)
    const [rows] = await require("../config/db").query(
      `SELECT u.*
       FROM user u
       WHERE u.email = ?`,
      [email]
    );
    
    if (rows.length === 0) {
      return res.status(401).json({ error: "E-Mail oder Passwort falsch." });
    }

    const user = rows[0];
    console.log('User from DB:', user);

    // Compare provided password with hashed password in database
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: "E-Mail oder Passwort falsch." });
    }

    // Password matches - generate JWT with user id and role for frontend permissions
    const token = jwt.sign(
      { id: user.id, role_id: user.role_id },
      process.env.JWT_SECRET || 'secret-placeholder',
      { expiresIn: '30m' }
    );

    res.json({
      token,
      user: {
        id: user.id,
        email: user.email,
        first_name: user.first_name,
        last_name: user.last_name,
        role_id: user.role_id
      }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
