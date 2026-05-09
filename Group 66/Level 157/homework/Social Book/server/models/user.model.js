const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String, 
        required: true,
    },
    password: {
        type: String,
        required: true, 
        minLength: [6, "Password length must be at least 6 characters!"]
    }
}, {
    timestamps: true
});

userSchema.pre('save', async function() {
    if (!this.isModified('password')) return;
    this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.comparePassword = async function(candidate) {
    // return await bcrypt.compare(candidate, this.password);
    this.password = await bcrypt.hash(this.password, 10);
};

module.exports = mongoose.model('User', userSchema);
