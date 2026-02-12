// 3) createServer მეთოდში გადაცემულ ფუნქციაში გამოიყენეთ switch რომ შეამოწმოთ მეთოდი, თუ მეთოდი არის GET გამოიძახეთ handleGetRequest, POSTმეთოდის შემთხვევაში გამოიძახეთ handlePostRequest, ხოლო თუ არცერთი მეთოდი არაა დააბრუნეთ ერორი სადაც ახსნით რომ ეს მეთოდი განსაზღვრული არაა
// BONUS:

// 1) დაამატეთ DELETE მეთოდი რომლითაც წაშლით პროდუქტს სიიდან

// 2) დამატების ან წასლში შემთხვევაში შეცვალეთ products.json ფაილიც.

const http = require('http');
const fs = require('fs');

const productsData = JSON.parse(fs.readFileSync('./products.json', 'utf-8'));
let products = productsData.products;

const saveToFile = () => {
    fs.writeFileSync('./products.json', JSON.stringify({ products }, null, 2));
};

const readBody = req => {
    return new Promise((resolve, reject) => {
        let body = '';
        req.on('data', (chunk) => body += chunk.toString());
        req.on('end', () => {
            try { resolve(body ? JSON.parse(body) : {}); } 
            catch (err) { reject(err); }
        });
        req.on('error', reject);
    });
};

const handleDeleteRequest = (req, res) => {
    const fullUrl = new URL(req.url, `http://${req.headers.host}`);
    const id = fullUrl.searchParams.get('id');

    if (req.url.startsWith('/products') && id) {
        const productIndex = products.findIndex(p => p.id == id);

        if (productIndex === -1) {
            res.writeHead(404, { 'content-type': 'application/json' });
            return res.end(JSON.stringify({ message: "Product not found!" }));
        }

        products.splice(productIndex, 1);
        saveToFile();

        res.writeHead(200, { 'content-type': 'application/json' });
        res.end(JSON.stringify({ message: "Product deleted successfully" }));
    } else {
        res.writeHead(400);
        res.end("ID is required for deletion");
    }
};

const handleGetRequest = (req, res) => {
    const fullUrl = new URL(req.url, `http://${req.headers.host}`);
    const id = fullUrl.searchParams.get('id');
    
    if(req.url.startsWith('/products') && id) {
        const product = products.find(p => p.id == id);
        if(!product) {
            res.writeHead(404, { 'content-type': 'application/json' });
            return res.end(JSON.stringify({ message: "Product not found!" }));
        }
        res.writeHead(200, { 'content-type': 'application/json' });
        res.end(JSON.stringify(product));
    } else if(req.url.startsWith('/products')) {
        res.writeHead(200, { 'content-type': 'application/json' });
        res.end(JSON.stringify(products));
    }
};

const handlePostRequest = async (req, res) => {
    try {
        const body = await readBody(req);
        const newId = products.length > 0 ? products[products.length - 1].id + 1 : 1;
        const product = { ...body, id: newId };
        
        products.push(product);
        saveToFile();

        res.writeHead(201, { 'content-type': 'application/json' });
        res.end(JSON.stringify(product));
    } catch(err) {
        res.writeHead(400);
        res.end("Invalid JSON body");
    }
};

const server = http.createServer((req, res) => {
    switch(req.method) {
        case 'GET': return handleGetRequest(req, res);
        case 'POST': return handlePostRequest(req, res);
        case 'DELETE': return handleDeleteRequest(req, res);
        default:
            res.writeHead(405);
            res.end("Method Not Allowed");
    }
});

server.listen(3000, () => console.log('Server is listening port 3000'));