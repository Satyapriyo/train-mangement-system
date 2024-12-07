const Train = require('../models/trainModel');
const { Op } = require('sequelize');

exports.createTrain = async (req, res) => {
  try {
    const { name, source, destination, totalSeats } = req.body;
    
    const train = await Train.create({
      name,
      source,
      destination,
      totalSeats,
      availableSeats: totalSeats
    });
    
    res.status(201).json({ 
      message: 'Train created successfully', 
      train 
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getTrainAvailability = async (req, res) => {
  try {
    const { source, destination } = req.query;
    
    const trains = await Train.findAll({
      where: {
        source,
        destination,
        availableSeats: {
          [Op.gt]: 0
        }
      }
    });
    

    
    res.json({ trains });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};