// to signUp

const User = require("../models/user.model");

const signUp = async (req, res) => {
    const { name, email, password } = req.body;

    const exists = await User.findOne({ email });

    if (exists) {
        return res.status(400).json({
            message: "User email already resgistered!",
        });
    };

    const newUser = await User.create({
        name,
        email,
        password
    });

    res.status(201).json({
        message: "User created Succesfully!"
    });
};


const logIn = async (req, res) => {
    const { email, password } = req.body;
    console.log("received:", email, password); // ← დაამატე
    
    const user = await User.findOne({ email });
    console.log("found user:", user); // ← დაამატე
    
    if (!user) {
        return res.status(400).json({ message: "Email or Password is incorrect!" });
    }
    if (user.password !== password) {
        return res.status(400).json({ message: "Email or Password is incorrect!" });
    }
    res.status(200).json({ message: "Login successful!", user });
};


module.exports = { signUp, logIn };