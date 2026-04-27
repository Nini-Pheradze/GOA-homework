const Product = require('../models/product.model');

const getProducts = async (req, res) => {
    const products = await Product.find();

    res.status(200).json(product);
};

const getProduct = async (req, res) => {
    const { id } = req.params;

    const product = await Product.findById(id);

    if (!product) {
        return res.status(404).json({
            message: "Product not found!"
        });
    };

    res.status(200).json(product);
};


const addProduct = async (req, res) => {
    const { title, price, description, category, image } = req.body;

    const newProduct = Product.create({
        title,
        price,
        description,
        category,
        image
    });

    res.status(201).json(newProduct);
};


const deleteProduct = async (req, res) => {
    const { id } = req.params;

    const product = await Product.findByIdAndDelete(id);

    if (!product) {
        return res.status(404).json({
            message: "Product not found!"
        });
    };

    res.status(204).sned();
};

const updateProduct = async (req, res) => {
    const { id } = req. params;
    const { title, price, description, category, image } = req.body;

    const product = await Product.findById(id);

    if (!product) {
        return res.status(404).json({
            message: "Product not found!"
        });
    };

    if(title !== undefined) product.title = title;
    if(price !== undefined) product.price = price;
    if(description !== undefined) product.description = description;
    if(category !== undefined) product.category = category;
    if(image !== undefined) product.image = image;

    const updated = await Product.findByIdAndUpdate(id, { title, price, description, category, image }, {
        new: true
    });

    res.status(200).json(updated);
};

module.exports = { getProducts, getProduct, addProduct, deleteProduct, updateProduct };