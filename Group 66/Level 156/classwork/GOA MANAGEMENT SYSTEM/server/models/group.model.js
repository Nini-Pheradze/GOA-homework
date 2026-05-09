const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
    number: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        enum: ["Web Development", "Cyber Security", "Data Science", "Game Development" ],
        required: true,
        default: "Web Development"
    },
    mentor: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true
    }
});

const Group = mongoose.model('Group', groupSchema);

module.exports = Group;