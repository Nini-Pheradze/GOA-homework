const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conection = await mongoose.connect('mongodb://localhost:27017/socialbook');
        console.log('MongoDB is connected!');
    } catch(err) {
        console.log(err);
    }
};

module.exports = connectDB;

// User model to CRUD documents
const User = require("../models/user.model");

// Utils
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/AppError");

// Account creation
const signup = catchAsync(async (req, res, next) => {
    const { fullname, email, password } = req.body;

    const user = await User.create({ fullname, email, password });

    res.status(201).json(user);
});

module.exports = { signup };

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: [true, "Fullname is required!"]
    },
    email: {
        type: String,
        required: [true, "Email is required!"],
        unique: [true, "Email is already registered!"]
    },
    password: {
        type: String,
        required: [true, "Password is required!"],
        minlength: [6, "Password length must be at least 6 characters!"]
    }
}, {
    timestamps: true
});

userSchema.pre('save', async function() {
    if(!this.isModified('password')) return;
    this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.comparePassword = async function(candidate) {
    return await bcrypt.compare(candidate, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;