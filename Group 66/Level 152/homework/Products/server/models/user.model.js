const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "The name field must be filled!"]
    },
    email: {
        type: String,
        required: [true, "The Email field must be filled!"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "The password field must be filled!"],
        minLength: [8, "The password shoulb be wriiten by 8 characters!"],
        maxLength: [20, "The maximum length od=f the password should be 20!"]
    },
    roles: {
        type: String,
        enum: ["Admin", "User"],
        default: 'User'
    }
});

const User = mongoose.model('user', userSchema);

module.exports = User;