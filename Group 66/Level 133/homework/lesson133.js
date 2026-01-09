const products = [
    { id: 1, name: 'Laptop', price: 3000 },
    { id: 2, name: 'Phone', price: 1500 },
    { id: 3, name: 'Tablet', price: 2000 }
];

module.exports = products;



const products = require('../data/products');


function createProduct(req, res) {
    const { name, price } = req.body;

    const newProduct = {
        id: products.length + 1,
        name,
        price
    };

    products.push(newProduct);
    res.end(JSON.stringify(newProduct));
}


function getProducts(req, res) {
    res.end(JSON.stringify(products));
}

function getProductById(req, res) {
    const { id } = req.body;

    const product = products.find(p => p.id === Number(id));

    if (!product) {
        res.statusCode = 404;
        return res.end('Product not found');
    }

    res.end(JSON.stringify(product));
}


function deleteProduct(req, res) {
    const { id } = req.body;

    const index = products.findIndex(p => p.id === Number(id));

    if (index === -1) {
        res.statusCode = 404;
        return res.end('Product not found');
    }

    products.splice(index, 1);
    res.end('Product deleted');
}

module.exports = {
    createProduct,
    getProducts,
    getProductById,
    deleteProduct
};



const {
    createProduct,
    getProducts,
    getProductById,
    deleteProduct
} = require('../controllers/productsController');

function productsRoutes(req, res) {
    if (req.url === '/products' && req.method === 'GET') {
        getProducts(req, res);
    }

    if (req.url === '/products' && req.method === 'POST') {
        let body = '';

        req.on('data', chunk => body += chunk);
        req.on('end', () => {
            req.body = JSON.parse(body);
            createProduct(req, res);
        });
    }

    if (req.url === '/products/id' && req.method === 'POST') {
        let body = '';

        req.on('data', chunk => body += chunk);
        req.on('end', () => {
            req.body = JSON.parse(body);
            getProductById(req, res);
        });
    }

    if (req.url === '/products' && req.method === 'DELETE') {
        let body = '';

        req.on('data', chunk => body += chunk);
        req.on('end', () => {
            req.body = JSON.parse(body);
            deleteProduct(req, res);
        });
    }
}

module.exports = productsRoutes;
