const express = require('express');
const router = express.Router();

const posts = [
    { id: '1', title: 'Post 1' },
    { id: '2', title: 'Post 2' }
];

router.param('postId', (req, res, next, postId) => {
    const post = posts.find(p => p.id === postId);
    if (!post) {
        return res.status(404).json({ message: 'Post not found' });
    }
    req.post = post;
    next();
});


