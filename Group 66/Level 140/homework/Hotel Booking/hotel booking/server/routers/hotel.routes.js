const express = require('express');
const router = express.Router();
const hotelController = require('../controllers/hotels.controller');

router.post('/', hotelController.createBooking);
router.get('/', hotelController.getBookings);
router.put('/:id', hotelController.updateBooking);
router.delete('/:id', hotelController.deleteBooking);

module.exports = router;
