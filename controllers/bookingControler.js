const Booking = require('../models/bookingModel');
const Train = require('../models/trainModel');

exports.bookSeat = async (req, res) => {
  try {
    const { trainId } = req.body;
    const userId = req.user.id;
    
    const train = await Train.findByPk(trainId);
    
    if (!train || train.availableSeats <= 0) {
      return res.status(400).json({ error: 'No seats available' });
    }
    
    const booking = await Booking.create({
      UserId: userId,
      TrainId: trainId,
      seatNumber: train.totalSeats - train.availableSeats + 1
    });
    
    // Update train's available seats
    train.availableSeats -= 1;
    await train.save();
    
    res.status(201).json({ 
      message: 'Seat booked successfully', 
      booking 
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getBookingDetails = async (req, res) => {
  try {
    const bookings = await Booking.findAll({
      where: { UserId: req.user.id },
      include: [Train]
    });
    
    res.json({ bookings });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};