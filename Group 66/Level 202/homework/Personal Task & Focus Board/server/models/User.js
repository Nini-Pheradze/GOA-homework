const mongoose = require('mongoose');

// what will need user
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    googleId: {
        type: String
    }
});

// hashing password
userSchema.pre('save', async function(next) {
    try {
        // check if the password has been modified
        if (!this.isModified('password')) return next();

        // generate a salt and hash the password
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);

        next(); // proceed to save
    } catch (error) {
        next(error) // passing any errs to next middleware
    }; 
});

// validating passwords
userSchema.methods.isValidPassword = async function (password) {
    try {
        return await bcrypt.compare(password, this.password);
    } catch (error) {
        throw new Error('Password comparison failed');
    }
};

// to use in controllers
const User = mongoose.model('user', userSchema);

module.exports = User;