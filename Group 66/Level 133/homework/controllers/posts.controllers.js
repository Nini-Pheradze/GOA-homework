const posts = [
    { id: 1, title: 'News Item 1', content: 'Content for news item 1' },
    { id: 2, title: 'News Item 2', content: 'Content for news item 2' },
    { id: 3, title: 'News Item 3', content: 'Content for news item 3' }
];

const getAllPosts = (req, res) => {
    res.json(posts);
};

const getPostById = (req, res) => {
    const { id } = req.params;
    const post = posts.find(p => p.id === parseInt(id));

    if(!post) {
        return res.status(404).json({ message: "Post cant be found!" });
    }
    res.json(post);
};

const createPost = (req, res) => {
    const { title, content } = req.query;

    if(!title || !content) {
        return res.status(400).json({ message: "Title and content is required!" });
    }

    const post = {
        id: Date.now(),
        title,
        content
    };

    posts.push(post);
    res.status(201).json(post);
};

const deletePost = (req, res) => {
    const { id } = req.params;
    const postIndex = posts.findIndex(p => p.id === parseInt(id));

    if (postIndex === -1) {
        return res.status(404).json({ message: "Post cant be found to delete!" });
    }

    posts.splice(postIndex, 1);
    res.status(204).send();
};

const updatePost = (req, res) => {
    const { id } = req.params;
    const postIndex = posts.findIndex(p => p.id === parseInt(id));

    if (!post) {
        return res.status(404).json({ message: 'Post cant be found to change!' });
    };

    if (title) post.title = title;
    if (content) post.content = content;

    res.status(200).json(posts);
};

module.exports = {
    getAllPosts,
    getPostById,
    createPost,
    deletePost,
    updatePost
};