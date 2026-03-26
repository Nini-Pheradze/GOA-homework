const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conection = await mongoose.connect(process.env.MONGO_URI);
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

    res.status(201).json({
        message: "User registered succesfully!",
        status: "succes"
    });
});

// Login function
const login = catchAsync(async (req, res, next) => {
    const { email, password } = req.body;

    const user = await User.findOne({email});

    if(!user) {
        return next(new AppError("Credentials is incorrect!", 401));
    }

    const isPassValid = await user.comparePassword(password);

    if(!isPassValid) {
        return next(new AppError("Credentials is incorrect!", 401));
    }

    user.password = undefined;

    res.status(200).json(user);
});

module.exports = { signup, login };



const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Post title is required!"]
    },
    content: {
        type: String,
        required: [true, "Post content is required!"]
    },
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: [true, "User id is required!"]
    }
}, {
    timestamps: true
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;