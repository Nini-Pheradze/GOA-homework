exports.getPost = (req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
            post: req.post
        }
    });
};

exports.updatePost = (req, res) => {
    const updatedPost = { ...req.post, ...req.body };

    res.status(200).json({
        status: 'success',
        data: {
            post: updatedPost
        }
    });
};

exports.deletePost = (req, res) => {
    res.status(204).json({
        status: "success",
        data: null
    });
};