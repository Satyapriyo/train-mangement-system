const express = require('express');

const { bookSeat, getBookingDetails } = require('../controllers/bookingControler');
const authMiddleware = require('../middleware/authMiddlewares');
const router = express.Router();

router.post('/book', authMiddleware, bookSeat);
router.get('/details', authMiddleware, getBookingDetails);

module.exports = router;

