// 2) დაამატეთ პროდუქტის დამატების Route POST /products რომელსაც query დახმარებიტ უნდა გადაეცემოდეს name და price, აგრეთვე დაამატეთ PATCH /products/:id რომელიც შეცვლის არსებულ პროდუქტს, თქვენ მინიმუმ ერთ კუთვნილებას უნდა ელოდებოდეთ ან name ან price, შეამოწმეთ რომელი გადმოგეცათ და მაგის მიხედვით შეცვალეთ ობიექტი, შემდეგ შეცვლილი ობიექტი დააბრუნეთ

const express = require('express');
const app = express();

let products = [
    { id: 1, name: "iPhone 15", price: 900 },
    { id: 2, name: "Samsung S23", price: 850 },
    { id: 3, name: "Google Pixel 8", price: 700}
];

app.post('/products', (req, res) => {
    const { name, price } = req.query;

    if (!name || !price) {
        return res.status(400).json({ message: "გთხოვთ მიუთითოთ სახელი და ფასი Query-ში" });
    }

    const newItem = {
        id: products.length > 0 ? products[products.length - 1].id + 1 : 1, name, price: parseInt(price)
    };

    products.push(newItem);
    res.status(201).json(newItem);
});

app.patch('/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const { name, price } = req.query;

    const product = products.find(p => p.id === productId);

    if (!product) {
        return res.status(404).json({ message: "პროდუქტი ვერ მოიძებნა" });
    }

    if (name) product.name = name;
    if (price) product.price = parseInt(price);

    res.json({ message: "წარმატებით განახლდა", product });
})

app.listen(3000, () => console.log("Server is listening on port 3000"));
