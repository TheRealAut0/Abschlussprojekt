const express = require("express");
const { getEmployees, 
    createEmployee, getEmployeeById, updateEmployee ,deleteEmployee } = require("../controllers/employeeController");

const router = express.Router();

// Alle Mitarbeiter abrufen
router.get("/", getEmployees);

// Einen neuen Mitarbeiter erstellen
router.post("/", createEmployee);

// Einen Mitarbeiter anhand der ID abrufen
router.get("/:id", getEmployeeById);

// Aktualisiert einen Mitarbeiter
router.put('/:id', updateEmployee);

// Einen Mitarbeiter löschen
router.delete("/:id", deleteEmployee);

module.exports = router;
