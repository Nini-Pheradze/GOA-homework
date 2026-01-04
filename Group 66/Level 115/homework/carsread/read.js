const fs = require('fs');

fs.readFile('cars.js', 'utf8', (err, data) => {
    if (err) {
        console.log("Error reading file:", err);
        return;
    }

    const cars = JSON.parse(data);
    console.log(cars);
});