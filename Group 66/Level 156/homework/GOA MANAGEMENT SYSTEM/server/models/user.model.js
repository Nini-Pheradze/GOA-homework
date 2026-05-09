const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    facebook: {
        type: String,
        required: true
    },
    role: {
        enum: ['admin', 'mentor', 'leader'],
        type: String,
        default: 'mentor'
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;