const hotelModel = require('../models/hotel.model');

// to create new booking
const createBooking = (req, res) => {
    const { userId, hotelName, chekingData, days } = req.body;

    const newBooking = {
        id: Date.now(),
        userId,
        hotelName,
        chekingData,
        days
    };

    const bookings = hotelModel.getAllBookings();
    bookings.push(newBooking);
    hotelModel.saveBookings(bookings);
    res.status(201).json({ message: "Successfully booked!", booking: newBooking });
};

// to see all bookings
const getBookings = (req, res) => {
    const bookings = hotelModel.getAllBookings();
    res.json(bookings);
};

// update booking
const updateBooking = (req, res) => {
    const { id } = req.params;
    const { chekingData } = req.body; 
    let bookings = hotelModel.getAllBookings();

    const index = bookings.findIndex(b => b.id === parseInt(id)); 
    if (index !== -1) {
        bookings[index].chekingData = chekingData;
        hotelModel.saveBookings(bookings);
        res.json({ message: "Booking is updated!", updated: bookings[index] });
    } else {
        res.status(404).json({ message: "Booking not found!" });
    }
};

// delete booking
const deleteBooking = (req, res) => {
    const { id } = req.params;
    let bookings = hotelModel.getAllBookings();

    const initialLength = bookings.length;
    bookings = bookings.filter(b => b.id !== parseInt(id));

    if (bookings.length < initialLength) { 
        hotelModel.saveBookings(bookings);
        res.json({ message: "Booking is cancelled!" });
    } else {
        res.status(404).json({ message: "Booking not found!" });
    }
};


module.exports = { createBooking, getBookings, updateBooking, deleteBooking };


