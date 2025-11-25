const express = require("express");
const { getHistories, getHistoriesList ,createHistory,getHistroyListById, getHistroyById, updateHistory, deleteHistory } = require("../controllers/historyController");

const router = express.Router();

router.get("/", getHistories);
router.get("/list", getHistoriesList);
router.post("/", createHistory);
router.get("/list/:id", getHistroyListById);
router.get("/:id", getHistroyById);
router.put("/:id", updateHistory);
router.delete("/:id", deleteHistory);

module.exports = router;
