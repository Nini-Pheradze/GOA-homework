const express = require('express');
const { getProducts, getProduct, addProduct, deleteProduct, updateProduct } = require('../controllers/product.controller');

const productRouter = express.Router();

productRouter.get('/', getProducts);
productRouter.get('/:id', getProduct);
productRouter.post('/', addProduct);
productRouter.delete('/:id', deleteProduct);
productRouter.patch('/:id', updateProduct);

module.exports = productRouter;
