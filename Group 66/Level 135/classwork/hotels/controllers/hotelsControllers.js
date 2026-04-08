// 1) შექმენით სერვერი რომელიც ეხება სასტუმრობეს, უნდა შეგვეძლოს სასტუმროს შექმნა, განახლება, წაშლა, დამატებული სასტუმროების ერთიანად ან ერთ-ერთის წამოღება.

// აუცილებლად გამოიყენეთ routers, controllers.

// + გამოიყენეთ რამდენიმე middleware app.use დახმარებით express.json body წასაკიტხად და morgan.

let hotels = [
    {
        id: 1,
        name: "Paragraph Resort & Spa",
        city: "Shekvetili",
        stars: 5,
        pricePerNight: 550,
        available: true
    },
    {
        id: 2,
        name: "Stamba Hotel",
        city: "Tbilisi",
        stars: 5,
        pricePerNight: 480,
        available: false
    },
    {
        id: 3,
        name: "Rooms Hotel",
        city: "Kazbegi",
        stars: 4,
        pricePerNight: 350,
        available: true
    },
    {
        id: 4,
        name: "Radisson Blu Iveria",
        city: "Batumi",
        stars: 5,
        pricePerNight: 400,
        available: true
    },
    {
        id: 5,
        name: "Lopota Lake Resort",
        city: "Telavi",
        stars: 4,
        pricePerNight: 300,
        available: true
    }
];

const getHotels = (req, res) => {
    res.json(hotels);
};

const getHotel = (req, res) => {
    const { id } = req.params;

    const hotel = hotels.find((h) => h.id === id * 1);

    if (!hotel) {
        return res.status(404).json({message: "Hotel NOt Found!" });
    };

    res.status(200).json(hotel);
};


const createHotel = (req, res) => {
    const { name, city, stars, pricePerNight, available } = req.body;

    if (!name || !city || !stars || !pricePerNight || !available ) {
        return res.status(400).json({message: "name, city, stars, pricePerNight, available are required!" });
    };

    const newHotel = {
        id : hotels[hotels.length - 1].id + 1, name, city, stars, pricePerNight, available
    };

    hotels.push(newHotel);

    res.status(201).json(newHotel);
};

const updateHotel = (req, res) => {
    const { id } = req.params;
    const { name, city, stars, pricePerNight, available } = req.body;

    const hotel = hotels.find((h) => h.id === id * 1);
    
    if (!hotel) {
        return res.status(404).json({
            message: 'Hotel not Found!'
        });
    };

    if (name) hotel.name = name;
    if (city) hotel.city = city;
    if (stars) hotel.stars = stars;
    if (pricePerNight) hotel.pricePerNight = pricePerNight;
    if (available) hotel.available = available;

    res.status(200).json(hotel);
};

const deleteHotel = (req, res) => {
    const { id } = req.params;

    const hotel = hotels.find((h) => h.id === id * 1);

    if (!hotel) {
        return res.status(404).json({message: 'The hotel with the given id not found!' });
    };

    const index = hotel.findIndex((h) => h.id === id * 1);
    hotels.splice(index, 1);
    res.status(204).send();
};

module.exports = { getHotel, getHotels, createHotel, updateHotel, deleteHotel };
