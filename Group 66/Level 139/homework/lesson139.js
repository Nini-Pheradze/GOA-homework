const posts = require('../data/posts');

exports.getPosts = (req, res, next) => {
    const { userId } = req.query;

    let resultPosts = posts;

    if (userId) {
        resultPosts = posts.filter(post => post.userId === userId);
    }

    res.json(resultPosts);
};
