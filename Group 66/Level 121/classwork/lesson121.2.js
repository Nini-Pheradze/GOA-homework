// req.url გამოყენებით გააკეთეთ სერვერი რომელიც თუ მოთხოვნა გამოგზავნილი იქნება /fullname დაუბრუნეთ თქვენი სახელი გვარი, /firstname დაუბრუნეთ მხოილოდ თქვენი სახელი /lastname დაუბრუნეთ გვარი, თუ არცერთი ბილიკი არ იქნება დაუბრუნეთ Invalid path ეს ტექსტი


const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/fullname') {
        res.end('Your fullname');
    } else if (req.url === '/firstname') {
        res.end('Your firstname')
    } else if (req.url === '/lastname') {
        res.end('Your lastname: ');
    } else {
        res.end("Invalid!")
    }
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});