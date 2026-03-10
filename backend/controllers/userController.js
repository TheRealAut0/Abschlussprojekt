const User = require("../models/userModel");
const bcrypt = require("bcryptjs");

exports.getUsers = async (req, res) => {
  try {
    const users = await User.getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createUser = async (req, res) => {
  const { email, password, first_name, last_name } = req.body;
  try {
    console.log('🔐 Creating user:', { email, first_name, last_name, password });
    // Hash the password with bcrypt (salt rounds = 10)
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log('✅ Password hashed:', hashedPassword);
    const newUser = await User.createUser(email, hashedPassword, first_name, last_name);
    console.log('✅ User created:', newUser);
    res.status(201).json(newUser);
  } catch (error) {
    console.error('❌ Error creating user:', error);
    res.status(500).json({ error: error.message });
  }
};

exports.getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.getUserById(id);
    if (!user) return res.status(404).json({ error: "User not found" });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateUser = async (req, res) => {
  const { id } = req.params;

  // Nur diese Felder aus dem Body in die DB übernehmen (Whitelist)
  // only allow certain fields to be updated
  const allowed = ['first_name', 'last_name', 'email', 'role_id', 'role'];
  const updates = {};
  for (const key of allowed) {
    if (Object.prototype.hasOwnProperty.call(req.body, key)) {
      // Falls 'role' (Rollenname) gesendet wird, konvertiere in role_id
      if (key === 'role') {
        // 'role' wird später als Rollenname behandelt, vorerst speichern
        updates['role_name'] = req.body[key];
      } else {
        updates[key] = req.body[key];
      }
    }
  }

  try {
    // Wenn Rollenname gesendet wurde, konvertiere in role_id
    if (updates.role_name) {
      const Role = require("../models/roleModel");
      const role = await Role.getRoleByName(updates.role_name);
      if (role) {
        updates.role_id = role.id;
      }
      delete updates.role_name;
    }

    // Verwende MySQL UPDATE statt MongoDB
    const updatedUser = await User.updateUser(id, updates);
    if (!updatedUser) return res.status(404).json({ message: 'User not found' });
    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await User.deleteUser(id);
    res.json({ message: "User deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
