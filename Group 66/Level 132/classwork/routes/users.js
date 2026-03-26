const express = require('express');
const router = require('./cars');
const roter = express.Router();

let users = [
    { id: 1, name: 'გიორგი', role: 'admin' },
    { id: 2, name: 'ნიკა', role: 'editor' },
    { id: 3, name: 'ანო', role: 'user' }
];


router.get('/', (req, res) => res.json(users));

router.post('/', (req, res) => {
    const newUser = { id: users.length + 1, ...req.body };
    users.push(newUser);
    res.status(201).json(newUser);
});

router.delete('/:id', (req, res) => {
    users = users.filter(u => u.id === parseInt(req.params.id));
    res.json({ message: 'User deleted!' });
});

module.exports = router;