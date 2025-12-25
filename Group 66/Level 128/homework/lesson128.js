const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

const products = [
    { name: 'iphone', price: 3000, rating: 5 },
    { name: 'samsung', price: 2500, rating: 4 },
    { name: 'laptop', price: 2637, rating: 5 }
];

app.get('/products', (req, res) => {
    const { name, price } = req.query;
    if (name || price) {
        const filteredProduct = products.find(p => 
            p.name === name && p.price === Number(price)
        );
        return res.json(filteredProduct || { message: "პროდუქტი ვერ მოიძებნა" });
    }
    
    res.json(products);
});

const users = [
    { id: 1, name: "გიორგი", surname: "გაბუნია", age: 25, active: true },
    { id: 2, name: "ნინო", surname: "ბერიძე", age: 30, active: false },
    { id: 3, name: "ლუკა", surname: "კაპანაძე", age: 22, active: true }
];

app.get('/users-filter', (req, res) => {
    const activeQuery = req.query.active;

    const isActive = activeQuery === 'true';
    
    const filteredUsers = users.filter(user => user.active === isActive);
    res.json(filteredUsers);
});


app.patch('/users/:id', (req, res) => {
    const userId = Number(req.params.id);
    const updates = req.body;

    const userIndex = users.findIndex(u => u.id === userId);

    if (userIndex !== -1) {
        users[userIndex] = { ...users[userIndex], ...updates };
        res.json({ message: "მომხმარებელი განახლდა", user: users[userIndex] });
    } else {
        res.status(404).json({ message: "მომხმარებელი ვერ მოიძებნა" });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});