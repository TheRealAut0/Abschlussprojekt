const express = require('express');
const router = express.Router();
const hardwareStatusController = require('../controllers/hardwareStatusController');

router.get('/', hardwareStatusController.getAllStatuses);
router.get('/:id', hardwareStatusController.getStatusById);
router.post('/', hardwareStatusController.createStatus);
router.put('/:id', hardwareStatusController.updateStatus);
router.delete('/:id', hardwareStatusController.deleteStatus);

module.exports = router;
