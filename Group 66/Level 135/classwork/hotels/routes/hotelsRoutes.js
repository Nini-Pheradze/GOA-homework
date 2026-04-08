const express = require('express');
const { getHotel, getHotels, createHotel, updateHotel, deleteHotel } = require('../controllers/hotelsControllers');
const hotelRouter = express.Router();

hotelRouter.get('/', getHotels);
hotelRouter.get('/', getHotel);
hotelRouter.post('/', createHotel);
hotelRouter.patch('/:id', updateHotel);
hotelRouter.delete('/:id', deleteHotel);

module.exports = hotelRouter;