// თქვენ უნდა გქონდეთ ბილიკი სახელად /even-Or-Odd აგრეთვე query ?num={num} რომელშიც შეინახავთ რიცხვს, თქვენი დავალებაა, რომ შეამოწმოთ უდრის თუ არა ბილიკი /even-Or-Odd - ს და მეთოდი უდრის თუ არა GET - ს, თუ მოცემული პირობა არის სწორი მაშინ შეამოწმეთ რიცხვი (კენტი თუ ლუწი) და დააბრუნეთ შესაბამისი ტექსტი, მაგალითად 'Your number is even'

const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const method = req.method;
    const num = parseInt(parsedUrl.query.num);

    if (path === '/even-Or-Odd' && method === 'GET') {

        if (isNaN(num)) {
            res.writeHead(400, { 'Content-Type': 'text/plain' });
            res.end('Please provide a valid number');
            return;
        }

        const result = (num % 2 === 0) ? 'even' : 'odd';

        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`Your number is ${result}`);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});