// 2) დაამატეთ პროდუქტის დამატების Route POST /products რომელსაც query დახმარებიტ უნდა გადაეცემოდეს name და price, აგრეთვე დაამატეთ PATCH /products/:id რომელიც შეცვლის არსებულ პროდუქტს, თქვენ მინიმუმ ერთ კუთვნილებას უნდა ელოდებოდეთ ან name ან price, შეამოწმეთ რომელი გადმოგეცათ და მაგის მიხედვით შეცვალეთ ობიექტი, შემდეგ შეცვლილი ობიექტი დააბრუნეთ

const express = require('express');

const app = express();

const products = [
    { id: 1, name: 'Laptop', price: 2500 },
    { id: 2, name: 'Phone', price: 1500 },
    { id: 3, name: 'Tablet', price: 900 }
];

app.post('/products', (req, res) => {
    const { name, price } = req.query;

    if (!name || !price) {
        return res.status(400).json({ message: 'name and price are required' });
    }

    const newProduct = {
        id: products.length ? products[products.length - 1].id + 1 : 1,
        name,
        price: Number(price)
    };

    products.push(newProduct);
    res.status(201).json(newProduct);
    });

    app.patch('/products/:id', (req, res) => {
    const id = Number(req.params.id);
    const { name, price } = req.query;

    const product = products.find(p => p.id === id);
    if (!product) {
        return res.status(404).json({ message: 'Product not found' });
    }

    if (!name && !price) {
        return res.status(400).json({ message: 'Provide at least name or price' });
    }

    if (name) product.name = name;
    if (price) product.price = Number(price);

    res.status(200).json(product);
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});