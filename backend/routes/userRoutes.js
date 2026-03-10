const express = require("express");
const {
    getUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser
} = require("../controllers/userController");
const verifyToken = require("../middleware/authMiddleware");

const router = express.Router();

// POST /users — Registrierung OHNE Auth
router.post("/", createUser);

// Alle anderen Routes MIT Auth
router.get("/", verifyToken, getUsers);
router.get("/:id", verifyToken, getUserById);
router.put("/:id", verifyToken, updateUser);
router.delete("/:id", verifyToken, deleteUser);

module.exports = router;
