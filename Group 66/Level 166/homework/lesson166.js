const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    senderId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    receiverId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    message: { type: String, required: true }
}, { timestamps: true }); // ავტომატურად ამატებს createdAt და updatedAt ველებს

module.exports = mongoose.model('Message', messageSchema);


const Message = require('../models/message.model');

// 1. შეტყობინების გაგზავნა
export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.user._id; // მივიღებთ authMiddleware-დან

        const newMessage = new Message({
            senderId,
            receiverId,
            message
        });

        await newMessage.save();
        
        // აქ მომავალში დაემატება Socket.io რეალურ დროში გადასაცემად
        res.status(201).json(newMessage);
    } catch (error) {
        res.status(500).json({ error: "სერვერის შეცდომა შეტყობინების გაგზავნისას" });
    }
};

// 2. შეტყობინებების წამოღება ორ მომხმარებელს შორის
export const getMessages = async (req, res) => {
    try {
        const { id: userToChatId } = req.params;
        const senderId = req.user._id;

        // ვპოულობთ ყველა შეტყობინებას, სადაც ეს ორი იუზერი მონაწილეობს
        const messages = await Message.find({
            $or: [
                { senderId: senderId, receiverId: userToChatId },
                { senderId: userToChatId, receiverId: senderId }
            ]
        }).sort({ createdAt: 1 }); // ვასორტირებთ დროის მიხედვით (ძველიდან ახლისკენ)

        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({ error: "შეცდომა შეტყობინებების წამოღებისას" });
    }
};