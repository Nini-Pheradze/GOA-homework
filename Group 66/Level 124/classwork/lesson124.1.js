// 1) products.json წაიკითხეთ ყველა ინფორმაცია და შეინახეთ ცალკე ცვლადში სახელად products, შემდეგ შექმენით 2 ფუნქცია, handleGetRequest და handlePostRequest, ორივე ფუნქციას გადაეცემა req და res ობიექტები, handleGetRequest ში შეამოწმეთ req.url, თუ წერია /products დაუბრუნეთ მთლიანი პროდუქტების სია, თუ წერია /products/1... მოიძიეთ მასივში ობიექტი კონკრეტული id რომელიც გამოგეცათ და დაუბრუნეთ მხოოლოდ ეგ ობიექტი. ორივე შემთხვევაში აბრუნებთ JSON ინფორმაციას

const http = require('http');
const fs = require('fs');
const url = require('url');

const products = JSON.parse(fs.readFileSync('./products.json', 'utf-8'));

const handleGetRequest = (req, res) => {
    const baseURL = new URL(req.url, `http://${req.headers.host}`);
    const pathname = baseURL.pathname;

    if (pathname === '/products') {
        res.end(JSON.stringify(products));
    } else if (pathname.startsWith('/products/')) {
        const parts = pathname.split('/'); 
        const id = parseInt(parts[2]);
        const product = products.find(p => p.id === id);

        if (product) {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(product));
        } else {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: "Product not found" }
            ));
        }
    } 
};

const handlePostRequest = (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end("POST request handled (logic to be added)");
};

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        handleGetRequest(req, res);
    } else if (req.method === 'POST') {
        handlePostRequest(req, res);
    } else {
        res.writeHead(405);
        res.end("Method Not Allowed");
    }
});


server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});

