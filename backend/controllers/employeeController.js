const Employee = require("../models/employeeModel");

// Alle Mitarbeiter abrufen
exports.getEmployees = async (req, res) => {
  try {
    const employees = await Employee.getAllEmployees();
    res.json(employees);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Einen neuen Mitarbeiter erstellen
exports.createEmployee = async (req, res) => {
  const { first_name, last_name, email } = req.body;
  try {
    if (!first_name || !last_name || !email) {
      return res.status(400).json({message:"Missing required fields"});
    }
    const newEmployee = await Employee.createEmployee(first_name, last_name, email);
    res.status(201).json(newEmployee);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Mitarbeiter aktuallisiern 
exports.updateEmployee = async (req, res) => {
  const { id } = req.params;
  const { first_name, last_name, email } = req.body;

  try {
    const employee = await Employee.getEmployeeById(id);
    if (!employee) {
      return res.status(404).json({ error: "Employee not found" });
    }
    if (!first_name || !last_name || !email) {
      return res.status(400).json({message:"Missing required fields"});
    }

    const updatedEmployee = await Employee.updateEmployee(id, first_name, last_name, email);
    res.status(200).json(updatedEmployee);
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while updating the employee",
      error: error.message,
    });
  }
};

// Mitarbeiter anhand der ID abrufen
exports.getEmployeeById = async (req, res) => {
  const { id } = req.params;
  try {
    const employee = await Employee.getEmployeeById(id);
    if (!employee) return res.status(404).json({ error: "Employee not found" });
    res.json(employee);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Einen Mitarbeiter löschen
exports.deleteEmployee = async (req, res) => {
  const { id } = req.params;
  try {
    const employee = await Employee.getEmployeeById(id);
    if (!employee) {
      return res.status(404).json({ error: "Employee not found" });
    }

    await Employee.deleteEmployee(id);
    res.json({ message: "Employee deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

