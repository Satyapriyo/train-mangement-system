const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./userModel');
const Train = require('./trainModel');

const Booking = sequelize.define('Booking', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  seatNumber: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

Booking.belongsTo(User);
Booking.belongsTo(Train);

module.exports = Booking;