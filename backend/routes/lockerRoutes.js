const express = require("express");
const { getLockers, createLocker, getLockerById,updateLocker,deleteLocker } = require("../controllers/lockerController");

const router = express.Router();

// Alle Locker abrufen
router.get("/", getLockers);

// Neuen Locker erstellen
router.post("/", createLocker);

// Einen Locker anhand der ID abrufen
router.get("/:id", getLockerById);

router.put("/:id", updateLocker);

// Einen Locker löschen
router.delete("/:id", deleteLocker);

module.exports = router;
