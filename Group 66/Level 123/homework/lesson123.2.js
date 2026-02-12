// 3) შექმენით ერთი ბილიკი, /transform?case={upper, lower}&text={text}, თქვენი დავალებაა, რომ query - დან ამოიღოთ text და გადააქციოთ ის case - ში არსებული მნიშვნელობის მიხედვით შესაბამის რეგისტრში მაგალითად text ---> Hello World case=upper ---> HELLO WORLD 

const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const parsedURl = url.parse(req.url, true);
    const path = parsedURl.pathname;
    const query = parsedURl.query;

    if (path === '/transform' && req.method === 'GET') {
        const text = query.text;
        const textCAse = query.case;

        let result = "";

        if (!text) {
            result = "Error: Please provide text";
        } else if (textCAse === 'upper') {
            result = text.toUpperCase();
        } else if (textCAse === 'lower') {
            result = text.toLowerCase();
        } else {
            result = "Error: Case must be 'upper' or 'lower'";
        }

        res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
        res.end(result);
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Not Found");
    }
});

server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});