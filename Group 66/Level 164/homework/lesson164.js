// models/Comment.js
const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    text: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true }
}, { timestamps: true });

module.exports = mongoose.model('Comment', commentSchema);

// controllers/commentController.js
// 1. კომენტარის დამატება
exports.addComment = async (req, res) => {
    try {
        const newComment = new Comment({
            text: req.body.text,
            user: req.user.id, // მოდის authMiddleware-დან
            post: req.params.postId
        });
        const savedComment = await newComment.save();
        res.status(201).json(savedComment);
    } catch (err) {
        res.status(500).json(err);
    }
};

// 2. კონკრეტული პოსტის კომენტარების წამოღება
exports.getPostComments = async (req, res) => {
    try {
        const comments = await Comment.find({ post: req.params.postId })
            .populate('user', 'username') // მოაქვს იუზერის სახელიც
            .sort({ createdAt: -1 });
        res.status(200).json(comments);
    } catch (err) {
        res.status(500).json(err);
    }
};

// 3. კომენტარის წაშლა
exports.deleteComment = async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.id);
        // ვამოწმებთ, არის თუ არა წაშლის მსურველი კომენტარის ავტორი
        if (comment.user.toString() === req.user.id) {
            await comment.deleteOne();
            res.status(200).json("კომენტარი წაიშალა");
        } else {
            res.status(403).json("თქვენ მხოლოდ თქვენი კომენტარის წაშლა შეგიძლიათ");
        }
    } catch (err) {
        res.status(500).json(err);
    }
};