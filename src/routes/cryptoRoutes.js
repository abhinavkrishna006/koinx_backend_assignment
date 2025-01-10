const express = require('express');
const CryptoController = require('../controllers/cryptoController');

const router = express.Router();

router.get('/stats', CryptoController.getStats);
router.get('/deviation', CryptoController.getDeviation);

module.exports = router;