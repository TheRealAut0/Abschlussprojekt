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
  const allowed = ['first_name', 'last_name', 'email', 'role_id'];
  const updates = {};
  for (const key of allowed) {
    if (Object.prototype.hasOwnProperty.call(req.body, key)) {
      updates[key] = req.body[key];
    }
  }

  // Falls Passwort explizit geändert werden soll, handle das getrennt (hashen!)
  if (req.body.password) {
    // Beispiel: falls du bcrypt benutzt, hier hashen und in updates.password setzen
    // const hashed = await bcrypt.hash(req.body.password, 10);
    // updates.password = hashed;
    // Wenn du Passwort-Update nicht erlauben willst, lasse es weg.
  }

  try {
    // Verwende $set, damit nur die angegebenen Felder überschrieben werden
    const updatedUser = await User.findByIdAndUpdate(id, { $set: updates }, { new: true });
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
