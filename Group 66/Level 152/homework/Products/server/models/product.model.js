const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required!']
    },
    price: {
        type: Number,
        required: [true, 'Price is required!']
    },
    description: {
        type: String,
        required: [true, 'Description field must be filled!'],
        minLength: 10,
        maxLength: 200
    },
    category: {
        type: String,
        required: [true, 'Category field is required!']
    },
    image: {
        type: String,
        required: [true, 'Image for product is required']
    }
}, { timestamps: true });


const Product = mongoose.model('product', productSchema);

module.exports = Product;