const User = require("../models/user.model");

// Registration of user
const registerUser = async (req, res) => {
    const { username, password, email } = req.body;
    const newUser = await User.create({
        username,
        email,
        password
    });

    await newUser.sendVerificationCode();

    res.status(201).json({
        message: "User created successfully!"
    });
};


// authorization of user
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({
        email
    });

    if (!user) {
        return res.status(400).json({
            message: 'Email or Password is incorrect!'
        });
    };

    const isCorrect = await user.comparePassword(password);

    if(!isCorrect) {
        return res.status(400).json({ message: 'Email or Password is incorrect!' });
    };

    user.password = undefined;

    res.status(201).json(user);
};


// verifying email
const verifyEmail = async (req, res) => {
    const { code } = req.body;

    const user = await User.findOne({verificationCode: code});

    if (!user) {
        return res.status(404).json({
            message: 'Code is incorrect or user dont exsist!'
        });
    }

    user.sendVerificationCode = undefined;
    user.isVerified = true;

    await user.save();

    res.json({
        message: "USer is verified!"
    });
};



module.exports = { registerUser, loginUser, verifyEmail };
