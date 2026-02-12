// controllers/productController.js

const fs = require('fs').promises;
const path = require('path');
const filePath = path.join(__dirname, '../data/products.json');

const readData = async () => {
    const data = await fs.readFile(filePath, 'utf8');
    return JSON.parse(data);
};

exports.getProductById = async (req, res, next) => {
    try {
        const products = await readData();
        const product = products.find(p => p.id === parseInt(req.params.id));

        if (!product) {
            return next({
                statusCode: 404,
                message: "პროდუქტი ამ ID-ით ვერ მოიძებნა"
            });
        }

        res.json(product);
    } catch (err) {
        next({
            statusCode: 500,
            message: "მონაცემების წაკითხვა ვერ მოხერხდა"
        });
    }
};