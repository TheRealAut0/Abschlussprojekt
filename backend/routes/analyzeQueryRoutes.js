const express = require('express');
const router = express.Router();
const analyzeQueryController = require('../controllers/analyzeQueryController');

router.get('/', analyzeQueryController.getAllQueries);
router.get('/result/:id', analyzeQueryController.getAnalyzeResult);
router.get('/:id', analyzeQueryController.getQueryById);
router.post('/', analyzeQueryController.createQuery);
router.put('/:id', analyzeQueryController.updateQuery);
router.delete('/:id', analyzeQueryController.deleteQuery);

module.exports = router;
