const fs = require('fs');

export const deletePost = (req, res, next) => {
    const postId = req.params.id;
    const userId = req.user.id; 

    let posts = JSON.parse(fs.readFileSync('./posts.json', 'utf-8'));

    const post = posts.find(p => p.id === postId);

    if (!post) {
        const error = new Error("პოსტი ვერ მოიძებნა");
        error.statusCode = 404;
        return next(error);
    }

    if (post.userId !== userId) {
        const error = new Error("თქვენ არ გაქვთ ამ პოსტის წაშლის უფლება");
        error.statusCode = 403;
        return next(error);
    }

    const filteredPosts = posts.filter(p => p.id !== postId);
    fs.writeFileSync('./posts.json', JSON.stringify(filteredPosts, null, 2));

    res.status(200).json({
        message: "პოსტი წარმატებით წაიშალა"
    });
};