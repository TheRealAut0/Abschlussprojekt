const Role = require("../models/roleModel");

exports.getRoles = async (req, res) => {
  try {
    const roles = await Role.getAllRoles();
    res.json(roles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getRoleById = async (req, res) => {
  const { id } = req.params;
  try {
    const role = await Role.getRoleById(id);
    if (!role) return res.status(404).json({ error: "Role not found" });
    res.json(role);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createRole = async (req, res) => {
  const { name } = req.body;
  try {
    const newRole = await Role.createRole(name);
    res.status(201).json(newRole);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateRole = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const updated = await Role.updateRole(id, name);
    if (!updated) return res.status(404).json({ error: "Role not found" });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteRole = async (req, res) => {
  const { id } = req.params;
  try {
    await Role.deleteRole(id);
    res.json({ message: "Role deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
