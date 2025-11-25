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
  try {
      const { name, email, password, first_name, last_name} = req.body;
      const updatedUser = await User.updateUser(req.params.id, { name, email, password, first_name, last_name });
      if (!updatedUser) return res.status(404).json({ message: "User not found" });
      res.json({ message: "User updated", user: updatedUser });
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
