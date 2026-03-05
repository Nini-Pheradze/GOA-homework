// შექმენით მასივი სადაც შეინახავთ პროდუქტების ობიექტებს, თქვენი დავალებაა, რომ query - დან გამომიდინარე დააბრუნოთ შესაბამისი პროდუქტი, მაგალითად /products?name='exampleProduct'&price=2637 returns ---> {
//   name: 'exampleProduct'
//   price: '2637'
//   rating: 5
// }


const express = require('express');
const app = express();
const PORT = 3000;

const products = [
    { name: 'macbook', price: 4500, rating: 5 },
    { name: 'exampleProduct', price: 2637, rating: 5 },
    { name: 'iphone', price: 3200, rating: 4.8 },
    { name: 'keyboard', price: 150, rating: 4.2 },
    { name: 'monitor', price: 800, rating: 4.5 }
];

app.get('/products', (req, res) => {
    const { name, price } = req.query;

    const foundProduct = products.find(({ name: pName, price: pPrice }) => {
        const nameMatch = name ? pName.toLowerCase() === name.toLowerCase() : true;
        const priceMatch = price ? pPrice === Number(price) : true;

        return nameMatch && priceMatch;
    });

    if (foundProduct) {
        res.json(foundProduct);
    } else {
        res.status(404).json({ message: "Product not found" });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`Test link: http://localhost:3000/products?name=exampleProduct&price=2637`);
});