const express = require("express");
const { getAccessories, createAccessory, getAccessoriesByhardwareId ,getAccessoryById, updateAccessory, deleteAccessory } = require("../controllers/accessoryController");

const router = express.Router();

router.get("/", getAccessories);
router.get("/hardware/:id", getAccessoriesByhardwareId);
router.post("/", createAccessory);
router.get("/:id", getAccessoryById);
router.put("/:id", updateAccessory);
router.delete("/:id", deleteAccessory);

module.exports = router;
