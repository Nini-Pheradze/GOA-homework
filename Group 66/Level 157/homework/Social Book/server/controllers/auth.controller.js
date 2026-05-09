const User = require('../models/user.model');
const catchAsync = require('../utils/catchAsync');
const AppError = require("../utils/AppError");

const signup = catchAsync(async (req, res, next) => {
    const { fullname, email, password } = req.body;
    if (!email) {
        return next(new AppError("Email is required", 400));
    }

    const newUser = await User.create({
        fullname,
        email,
        password
    });

    res.status(201).json({
        status: 'success',
        data: { user: newUser }
    });
});


const login = catchAsync(async (req, res, next) => {
    const { email, password } = req.body;

    const user = await User.findOne({email}).select("+password");

    if(!user) {
        return next(new AppError("Credentials is incorrect!", 401));
    }

    const isPassValid = await user.comparePassword(password);

    if(!isPassValid) {
        return next(new AppError("Credentials is incorrect!", 401));
    }


    sendToken(user, res);
});

module.exports = { signup, login };
