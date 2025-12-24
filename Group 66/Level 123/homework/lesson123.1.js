const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

const getCarsData = () => {
    try {
        const data = fs.readFileSync(path.join(__dirname, 'cars.json'), 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('შეცდომა ფაილის წაკითხვისას:', error);
        return [];
    }
};

app.get('/', (req, res) => {
    const cars = getCarsData();
    res.json({
        success: true,
        count: cars.length,
        data: cars
    });
    });


    app.get('/cars/car', (req, res) => {
    const { id } = req.query;
    
    if (!id) {
        return res.status(400).json({
        success: false,
        error: 'გთხოვთ მიუთითოთ მანქანის ID'
        });
    }
    
    const cars = getCarsData();
    const carId = parseInt(id);

    const car = cars.find(c => c.id === carId);
    
    if (!car) {
        return res.status(404).json({
        success: false,
        error: `მანქანა ID ${id}-ით ვერ მოიძებნა`
        });
    }
    
    res.json({
        success: true,
        data: car
    });
    });

    app.use((req, res) => {
    res.status(404).json({
        success: false,
        error: 'გვერდი ვერ მოიძებნა'
    });
});

app.listen(PORT, () => {
    console.log(`სერვერი გაშვებულია http://localhost:${PORT}`);
    console.log(`მთავარი გვერდი: http://localhost:${PORT}/`);
    console.log(`მაგალითი: http://localhost:${PORT}/cars/car?id=1`);
});