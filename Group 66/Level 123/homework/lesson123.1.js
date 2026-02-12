// 2) შექმენით cars.json - სადაც გექნებათ მოცემული მანქანების ინფორმაცია, თითოეულს უნდა ჰქონდეს თავისი id, იმ შემთხვევაში თუ მომხმარებლის მიერ შემოტანილი ბილიკი === '/' მაშინ დააბრუნეთ მთლიანი cars.json ინფორმაცია, იმ შემთხვევაში თუ მომხმარებელს შემოიტანა ბილიკი 'cars/car?id={carId}' მაშნ მომხმარებელს json ფორმატში გამუტანეთ ამ id - ის მიხედვით მანქანის ინფორმაცია, იმ შმთხვევაში თუ მომხმარებელმა query - სახით შემოიტანა ისეთი მანქანის id რომელიც არ არსებობს დაუბრუნეთ error

const http = require('http');
const url = require('url');
const fs = require('fs');
const { json } = require('stream/consumers');

const server = http.createServer((req, res) => {
    const parsedURL = url.parse(req.url, true); // 
    const path = parsedURL.pathname;
    const query = parsedURL.query;

    const carsData = JSON.parse(fs.readFileSync('./cars.json', 'utf-8'));

    if (path === '/' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(carsData));
    } else if (path === '/cars/car' && req.method === 'GET') {
            const carID = parseInt(query.id);

            const foundCars = carsData.find(car => car.id === carID);

            if (foundCars) {
                res.writeHead(200, {'Content-Type': 'application/json'});
                res.end(JSON.stringify(foundCars));
            } else {
                res.writeHead(404, {'Content-Type': 'application/json'});
                res.end(JSON.stringify({error: "Car not found" }));
            }
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

server.listen(3000, () => 
    console.log("Server on http://localhost:3000")
);
