const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    // group: {
    //     type: mongoose.Types.ObjectId,
    //     ref: 'Group'
    // },
    password: {
        type: String,
        required: true
    },
    github: {
        type: String,
        required: true
    },
    facebook: {
        type: String,
        required: true
    },
    level: {
        type: Number,
        default: 0
    },
    xp: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
});

studentSchema.pre('save', function() {
    if (!this.isModified('password')) return;
    this.password = '123'
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;