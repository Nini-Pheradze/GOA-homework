const posts = require('../data/posts');


exports.createPost = (req, res, next) => {
    const { title, content } = req.body;

    if (!title || !content) {
        return next({
            statusCode: 400,
            message: 'Title and content are required'
        });
    }

    const newPost = {
        id: Date.now().toString(),
        title,
        content,
        userId: req.user.id
    };

    posts.push(newPost);
    res.status(201).json(newPost);
};


exports.updatePost = (req, res, next) => {
    const post = posts.find(p => p.id === req.params.id);

    if (!post) {
        return next({
            statusCode: 404,
            message: 'Post not found'
        });
    }

    if (post.userId !== req.user.id) {
        return next({
            statusCode: 403,
            message: 'Access denied'
        });
    }

    post.title = req.body.title || post.title;
    post.content = req.body.content || post.content;

    res.json(post);
};


exports.deletePost = (req, res, next) => {
    const index = posts.findIndex(p => p.id === req.params.id);

    if (index === -1) {
        return next({
            statusCode: 404,
            message: 'Post not found'
        });
    }

    if (posts[index].userId !== req.user.id) {
        return next({
            statusCode: 403,
            message: 'Access denied'
        });
    }

    const deleted = posts.splice(index, 1);
    res.json(deleted[0]);
};
