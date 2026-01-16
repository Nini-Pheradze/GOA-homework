/*
    Controller შეიცავს business logic-ს
    აქ ხდება მონაცემების დამუშავება
*/

let phones = [
    { id: 1, brand: "Apple", model: "iPhone 14", price: 3000 },
    { id: 2, brand: "Samsung", model: "S23", price: 2500 }
];

// GET /phones
// ყველა ტელეფონის წამოღება
const getPhones = (req, res) => {
    res.json(phones);
};

// GET /phones/:id
// ტელეფონის წამოღება id-ით
const getPhoneById = (req, res) => {
    const phone = phones.find(
        (p) => p.id === Number(req.params.id)
    );

    if (!phone) {
        return res.status(404).json({ message: "Phone not found" });
    }

    res.json(phone);
    };

    // POST /phones
    // ახალი ტელეფონის დამატება
    const addPhone = (req, res) => {
    const newPhone = {
        id: Date.now(),
        brand: req.body.brand,
        model: req.body.model,
        price: req.body.price
    };

    phones.push(newPhone);
    res.status(201).json(newPhone);
};

// PUT /phones/:id
// ტელეფონის განახლება
const updatePhone = (req, res) => {
    const phone = phones.find(
        (p) => p.id === Number(req.params.id)
    );

    if (!phone) {
        return res.status(404).json({ message: "Phone not found" });
    }

    phone.brand = req.body.brand;
    phone.model = req.body.model;
    phone.price = req.body.price;

    res.json(phone);
};

// DELETE /phones/:id
// ტელეფონის წაშლა
const deletePhone = (req, res) => {
    phones = phones.filter(
        (p) => p.id !== Number(req.params.id)
    );

    res.json({ message: "Phone deleted" });
};

module.exports = {
    getPhones,
    getPhoneById,
    addPhone,
    updatePhone,
    deletePhone
};

