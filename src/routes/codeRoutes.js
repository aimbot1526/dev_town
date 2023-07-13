const express = require('express');
const codeController = require('../controllers/codeController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// Code submission route
router.post('/submit', authMiddleware.verifyToken, codeController.submitCode);

// Result retrieval route
router.get('/:id', authMiddleware.verifyToken, codeController.getResult);

module.exports = router;
