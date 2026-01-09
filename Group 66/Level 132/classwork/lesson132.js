// 1) შექმენით სერვერი მანქანების სამართავი სისტემიოსთვის, სადაც გექნებათ ორი ტიპის ბილიკი /cars და /users, ორივე ტიპის ბილიკისთის შექმენით სატესტო მასივები სადაც მინიმუმ 3 მნიშნელობა გექნებათ შენახული შემდეგ კი დაარეგისტირრეთ ყველა ის route რომელიც საჭიროა (CRUD - Create, Read, Update, Delete) (post, get, patch, delete) - თავისი query (ინფოს შესაქმნელად) და პარამეტრებით (კონკრეტული ობიექტების ასარჩევად) კოდის ხარისხის და ოპტიმიზაციისთვის გამოიყენეთ router და use მეთოდები.

const express = require('express');
const router = express.Router();

let users = [
    { id: 1, name: 'Giorgi', role: 'admin' },
    { id: 2, name: 'Nino', role: 'user' },
    { id: 3, name: 'Luka', role: 'user' }
];


router.get('/', (req, res) => {
    res.json(users);
});


router.get('/:id', (req, res) => {
    const user = users.find(u => u.id === Number(req.params.id));
    res.json(user || { message: 'User not found' });
});


router.post('/', (req, res) => {
    const { name, role } = req.query;

    const newUser = {
        id: Date.now(),
        name,
        role
    };

    users.push(newUser);
    res.json(newUser);
});

router.patch('/:id', (req, res) => {
    const user = users.find(u => u.id === Number(req.params.id));
    if (!user) return res.json({ message: 'User not found' });

    user.name = req.query.name || user.name;
    user.role = req.query.role || user.role;

    res.json(user);
});

router.delete('/:id', (req, res) => {
    users = users.filter(u => u.id !== Number(req.params.id));
    res.json({ message: 'User deleted' });
});

module.exports = router;
