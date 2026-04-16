const fs = require('fs');
const path = require('path');

const HOTELS_FILE = path.join(__dirname, "../database/hotels.json");

const getAllBookings = () => {
    try {
        const data = fs.readFileSync(HOTELS_FILE, 'utf8');
        return JSON.parse(data || '[]');
    } catch (error) {
        return []
    }
};

const saveBookings = (bookings) => {
    fs.writeFileSync(HOTELS_FILE, JSON.stringify(bookings, null, 2));
};

module.exports = { getAllBookings, saveBookings };