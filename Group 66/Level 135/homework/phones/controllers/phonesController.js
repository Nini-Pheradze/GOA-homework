// 3) შექმენით პროექტი, სადაც შეგეძლებათ ახალი ტელეფონების დამატება, წაშლა, განახლება და წამოღება (როგორც id - ით ისე id - ის გარეშე), მოცემული კოდები გადაანაწილეთ შესაბამის folder, file - ებში, აგრეთვე შექმენით თქვენივე middleware ფუნქციები მაგალითად (body checker რომელიც შეამოწმებს არის თუ არა body - ში ტელეფონისთვის აუცილებელი კუთვნილებები მოცემული) გამოიყენეთ ისინი, შეგიძლიათ გამოიყენოთ ისეთი middleware ფუნქციები რომლებიც მოცემული დავალებისთვის გჭირდებათ

const phones = [
    {
        brand: "Apple",
        model: "iPhone 15 Pro",
        storage: "256GB",
        color: "Natural Titanium",
        price: 1100,
        isAvailable: true
    },
    {
        brand: "Samsung",
        model: "Galaxy S24 Ultra",
        storage: "512GB",
        color: "Titanium Gray",
        price: 1300,
        isAvailable: true
    },
    {
        brand: "Google",
        model: "Pixel 8 Pro",
        storage: "128GB",
        color: "Obsidian",
        price: 900,
        isAvailable: false
    },
    {
        brand: "Xiaomi",
        model: "14 Ultra",
        storage: "512GB",
        color: "Black",
        price: 1000,
        isAvailable: true
    }
];

const getPhones = (req, res) => {
    res.json(phones);
};

const getPhone = (req, res) => {
    const { id } = req.params;

    const phone = phones.find((p) => p.id === id * 1);

    if (!phone) {
        res.status(404).json({message: "Phone not found!" });
    };

    res.status(200).json(phone);
};


const createPhone = (req, res) => {
    const { brand, model, storage, color, price, isAvailable } = req.body;

    if (!brand || !model || !storage || !color || !price || !isAvailable) {
        return res.status(400).json({message: "brand, model, storage, color, price, isAvailable are required!" });
    }

    const newPhone = {
        id : phones[phones.length - 1].id + 1, brand, model, storage, color, price, isAvailable
    };

    phones.push(newPhone);

    res.status(200).json(newPhone);
};

const deletePhone = (req, res) => {
    const { id } = req.params;

    const phone = phones.find((p) => p.id === id * 1);

    if (!phone) {
        return res.status(404).json({message: 'The phone with the given id not found!' })
    };

    const phoneIndex = phones.findIndex((p) => p.id === id * 1);
    phones.splice(phoneIndex, 1);
    res.status(204).send();
};

const updatePhone = (req, res) => {
    const { id } = req.params;

    const { brand, model, storage, color, price, isAvailable } = req.body;

    const phone = phones.find((p) => p.id === id * 1);

    if (!phone) {
        return res.status(404).json({message: "Phone not Found!" });
    };

    if (brand) phone.brand = brand;
    if (model) phone.model = model;
    if (storage) phone.storage = storage;
    if (color) phone.color = color;
    if (price) phone.price = price;
    if (isAvailable) phone.isAvailable = isAvailable;

    res.status(200).json(phone);
};



module.exports = { getPhones, getPhone, createPhone, deletePhone, updatePhone };