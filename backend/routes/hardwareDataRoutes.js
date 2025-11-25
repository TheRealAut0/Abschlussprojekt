const express = require("express");
const router = express.Router();
const hardwareDataController = require("../controllers/hardwareDataController");

router.get("/", hardwareDataController.getAllHardwareData);
router.get("/list", hardwareDataController.getAllHardwareDataList);
router.get("/:id", hardwareDataController.getHardwareDataById);
router.post("/", hardwareDataController.createHardwareData);
router.put("/:id", hardwareDataController.updateHardwareData);
router.delete("/:id", hardwareDataController.deleteHardwareData);

module.exports = router;
