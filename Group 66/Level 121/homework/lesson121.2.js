// შექმენით server - ი, შეამოწმეთ ბილიკი თუ ბილიკი არის /text დააბრუნეთ ჩვეულებრივი ტექსტი, თუ /json გამოიტანეთ რაიმე ინფორმაცია JSON - ის ფორმატში, თუ /number გამოიტანეთ რაიმე რიცხვი

const http = require('http');
const { json } = require('stream/consumers');

const server = http.createServer((req, res) => {
    if (req.url === '/path') {
        res.end('Hello World!');
    } else if (req.url === '/json') {
        res.end(JSON.stringify('Hello, I am Nino!'));
    } else if (req.url === '/number') {
        res.end('8');
    }
});

server.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});