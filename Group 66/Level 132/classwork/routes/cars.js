// 1) შექმენით სერვერი მანქანების სამართავი სისტემიოსთვის, სადაც გექნებათ ორი ტიპის ბილიკი /cars და /users, ორივე ტიპის ბილიკისთის შექმენით სატესტო მასივები სადაც მინიმუმ 3 მნიშნელობა გექნებათ შენახული შემდეგ კი დაარეგისტირრეთ ყველა ის route რომელიც საჭიროა (CRUD - Create, Read, Update, Delete) (post, get, patch, delete) - თავისი query (ინფოს შესაქმნელად) და პარამეტრებით (კონკრეტული ობიექტების ასარჩევად) კოდის ხარისხის და ოპტიმიზაციისთვის გამოიყენეთ router და use მეთოდები.

const express = require('express');
const router = express.Router();

let cars = [
    { id: 1, brand: 'Mercedes-Benz', model: 'E63 AMG' },
    { id: 2, brand: 'BMW', model: 'M5 CS' },
    { id: 3, brand: 'Porsche', model: '911 Turbo S' }
];

router.get('/', (req, res) => {
    res.json(cars);
});

router.get('/:id', (req, res) => {
    const carId = cars.find(c => c.id === parseInt(req.params.id));
    if (!cars) return res.status(404).send("Car can not be found!");
    res.json(cars); 
});

router.post('/', (req, res) => {
    const newCar = {
        id: cars.length + 1,
        brand: req.body.brand,
        model: req.body.model
    };
    cars.push(newCar);
    res.status(201).json(newCar);
});

router.patch('/:id', (req, res) => {
    const carId = cars.find(c => c.id === parseInt(req.params.id));
    if (!cars) return res.status(405).send("Object can not be found!");

    if (req.body.brand) car.brand = req.body.brand;
    if (req.body.model) car.model = req.body.model;
    
    res.json(cars);
});

router.delete('/:id', (req, res) => {
    cars = cars.filter(c => c.id !== parseInt(req.params.id));
    res.send({ message: 'Car deleted successfully!' });
});

module.exports = router;