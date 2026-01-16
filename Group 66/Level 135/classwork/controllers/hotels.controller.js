let hotels = require('../data/hotels');

const getAllHotels = (req, res) => {
    res.json(hotels);
};

const getHotelById = (req, res) => {
    const hotel = hotels.find(h => h.id === Number(req.params.id));
    if (!hotel) return res.status(404).json({ message: 'Hotel not found' });
    res.json(hotel);
};

const createHotel = (req, res) => {
    const newHotel = { id: Date.now(), ...req.body };
    hotels.push(newHotel);
    res.status(201).json(newHotel);
};

const updateHotel = (req, res) => {
    const index = hotels.findIndex(h => h.id === Number(req.params.id));
    if (index === -1) return res.status(404).json({ message: 'Hotel not found' });

    hotels[index] = { ...hotels[index], ...req.body };
    res.json(hotels[index]);
};

const deleteHotel = (req, res) => {
    hotels = hotels.filter(h => h.id !== Number(req.params.id));
    res.json({ message: 'Hotel deleted successfully' });
};
module.exports = {
    getAllHotels,
    getHotelById,
    createHotel,
    updateHotel,
    deleteHotel
};
