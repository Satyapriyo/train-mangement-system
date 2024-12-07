const express = require('express');
const dotenv = require('dotenv');
const sequelize = require('./config/database');

// Models (to sync database)
const User = require('./models/userModel');
const Train = require('./models/trainModel');
const Booking = require('./models/bookingModel');

// Routes
const authRoutes = require('./routes/authRoutes');
const trainRoutes = require('./routes/trainRoutes');
const bookingRoutes = require('./routes/bookingRoutes');

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/auth', authRoutes);
app.use('/trains', trainRoutes);
app.use('/bookings', bookingRoutes);

// Database Connection and Server Start
sequelize.sync({ force: false })
  .then(() => {
    console.log('Database connected successfully');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  app.get("/",(req,res)=>{
    res.send(process.env.JWT_SECRET)
  })