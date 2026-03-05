// 2) შექმენით ბილიკი '/cart', მოუსმინეთ მოთხოვნებს post, get, delete, უნდა შეგეძლოთ cart - შ ახალი item - ის ჩამატება წაშლა და ელემენტების წამოღება (მთლიანად და id - ის მიხედვით)

const express = require('express');
const app = express();

app.use(express.json());

let cart = [
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Mouse", price: 25 }
];

app.get('/cart', (req, res) => {
    res.json(cart);
});

app.get('/cart/:id', (req, res) => {
    const itemId = parseInt(req.params.id);
    const item = cart.find(i => i.id === itemId);

    if (!item) return res.status(404).send('ნივთი ვერ მოიძებნა');
    res.json(item);
});

app.post('/cart', (req, res) => {
    const newItem = {
        id: cart.length > 0 ? cart[cart.length - 1].id + 1 : 1, 
        name: req.body.name,
        price: req.body.price
    };

    cart.push(newItem);
    res.status(201).json(newItem);
});

app.delete('/cart/:id', (req, res) => {
    const itemId = parseInt(req.params.id);
    const initialLength = cart.length;
    
    cart = cart.filter(item => item.id !== itemId);
    
    if (cart.length === initialLength) {
        return res.status(404).send('ნივთი წასაშლელად ვერ მოიძებნა');
    }
    
    res.send(`ნივთი ID-ით ${itemId} წარმატებით წაიშალა`);
});

app.listen(3000, () => {
    console.log(`Server running at http://localhost:3000`);
});

