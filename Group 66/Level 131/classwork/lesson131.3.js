//  შექმენით CRUD ოპერაცია მთლიანად user ზე, უნდა ხდებოდეს მომხმარებლის რეგისტრაცია, ავტორიზაცია, ყველა მომხმარებლის ნახვა, ერთი მომხმარებლის ნახვა ID, მომხმარებლის წაშლა და განახლება. GET, POST, DELETE, PATCH 

const express = require('express');
const app = express();

app.use(express.json());

let users = [];

app.post('/register', (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    const exists = users.find(u => u.email === email);
    if (exists) {
        return res.status(400).json({ message: 'Email already registered' });
    }

    const newUser = {
        id: users.length ? users[users.length - 1].id + 1 : 1,
        name,
        email,
        password
    };

    users.push(newUser);
    res.status(201).json(newUser);
    });

    app.post('/login', (req, res) => {
    const { email, password } = req.body;

    const user = users.find(
        u => u.email === email && u.password === password
    );

    if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    res.status(200).json({ message: 'Login successful', user });
    });

    app.get('/users', (req, res) => {
    res.status(200).json(users);
    });

    app.get('/users/:id', (req, res) => {
    const id = Number(req.params.id);
    const user = users.find(u => u.id === id);

    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(user);
    });

    app.patch('/users/:id', (req, res) => {
    const id = Number(req.params.id);
    const { name, email, password } = req.body;

    const user = users.find(u => u.id === id);
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    if (!name && !email && !password) {
        return res.status(400).json({ message: 'Provide at least one field' });
    }

    if (name) user.name = name;
    if (email) user.email = email;
    if (password) user.password = password;

    res.status(200).json(user);
    });

    app.delete('/users/:id', (req, res) => {
    const id = Number(req.params.id);
    const index = users.findIndex(u => u.id === id);

    if (index === -1) {
        return res.status(404).json({ message: 'User not found' });
    }

    const deletedUser = users.splice(index, 1);
    res.status(200).json(deletedUser[0]);
    });

    app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
