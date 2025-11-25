const express = require("express");
const router = express.Router();
const {getHardwareInventory, getHardwareInventoryById, getHardwareList ,getHardwareListById ,createHardwareInventory, updateHardwareInventory, deleteHardwareInventory} = require("../controllers/hardwareInventoryController");

router.get("/", getHardwareInventory);
router.get("/list", getHardwareList);
router.get("/list/:id", getHardwareListById);
router.get("/:id", getHardwareInventoryById);
router.post("/", createHardwareInventory);
router.put("/:id", updateHardwareInventory);
router.delete("/:id", deleteHardwareInventory);

module.exports = router;
