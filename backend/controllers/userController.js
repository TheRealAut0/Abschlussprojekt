const User = require("../models/userModel");

exports.getUsers = async (req, res) => {
  try {
    const users = await User.getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createUser = async (req, res) => {
  const { email, password, first_name, last_name} = req.body;
  try {
    const newUser = await User.createUser(email, password, first_name, last_name,);
    res.status(201).json(newUser);
  } catch (error) {
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
  const allowed = ['first_name', 'last_name', 'email', 'role', 'isAdmin', 'isEditor', 'isViewer', 'name'];
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
