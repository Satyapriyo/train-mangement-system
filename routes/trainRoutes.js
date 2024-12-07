const express = require('express');
const { createTrain, getTrainAvailability } = require('../controllers/trainControler');
const adminMiddleware = require('../middleware/adminMiddleware');
const authMiddleware = require('../middleware/authMiddlewares');
const router = express.Router();



router.post('/create', adminMiddleware, createTrain);
router.get('/availability', authMiddleware, getTrainAvailability);

module.exports = router;