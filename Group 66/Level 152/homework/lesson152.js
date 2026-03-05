const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
    });

    // პაროლის ჰეშირება შენახვამდე
    userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 12);
    next();
});

module.exports = mongoose.model('User', userSchema);
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// რეგისტრაცია
router.post('/register', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const newUser = new User({ username: req.body.username, password: hashedPassword });
        await newUser.save();
        res.status(201).json({ message: "მომხმარებელი შეიქმნა" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
    });

    // ლოგინი
    router.post('/login', async (req, res) => {
    const user = await User.findOne({ username: req.body.username });
    if (!user || !(await bcrypt.compare(req.body.password, user.password))) {
        return res.status(401).json({ message: "არასწორი მონაცემები" });
    }
    const token = jwt.sign({ userId: user._id }, 'SAIDUMLO_GASAGEBI', { expiresIn: '1h' });
    res.json({ token });
});

module.exports = router;