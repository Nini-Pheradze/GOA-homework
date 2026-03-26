// 1) შექმენით express სერვერი, რომელიც განკუთვნილია სოციალური ქსელის ვებსაიტისთვის. შექმენიტ მასივი posts სადაც თავიდანვე 3 ობიექტი იქნება მოცემული სტრუქტურით {id, title, content}, შემდეგ დაამატეთ ყველა საჭირო CRUD ოპერაცია.

// 1) ყველა პოსტის დაბრუნება.
// 2) ერთი კონკრეტული პოსტის დაბრუნება ID დახმარებით.
// 3) ახალი პოსტის შექმნა query დახმარებით.
// 4) პოსტის წაშლა ID დახმარებით.
// 5) პოსტის განახლება ID და query დახმარებით.

const express = require('express');
const { post } = require('../../../Level 132/classwork/routes/cars');
const postRouter = express.Router();

const posts = [
    { id: 1, title: 'News Item 1', content: 'Content for news item 1' },
    { id: 2, title: 'News Item 2', content: 'Content for news item 2' },
    { id: 3, title: 'News Item 3', content: 'Content for news item 3' }
];

// Route to get all posts
postRouter.get('/', (req, res) => {
    res.json(posts);
});

// Route to get a specific post item by id
postRouter.get('/:id', (req, res) => {
    const { id } = req.params;
    const post = posts.find(p => p.id === parseInt(id));

    if (!post) {
        return res.status(404).json({ message: 'Post cant be found!' });
    }

    res.json(post);
});

// Roiute to add new post
postRouter.post('/', (req, res) => {
    const { title, content } = req.query;

    if(!title || !content) {
        return res.status(404).json({ message: "Title and content is required!" });
    }

    const newPost = {
        id: Date.now(),
        title,
        content
    }

    posts.push(newPost);
    res.status(201).json(post);
});


// Route to delete a post by id
postRouter.delete('/:id', (req, res) => {
    const { id } = req.params;

    const postIndex = posts.find(p => p.id === parseInt(id));

    if (postIndex === -1) {
        return res.status(404).json({message: "Post cant be found to delete!" });
    }

    posts.splice(postIndex, 1);
    res.status(204).send();
});


// route to patch
postRouter.patch('/:id', (req, res) => {
    const { id } = req.params;
    const { title, content } = req.query;

    const post = posts.find(p => p.id === parseInt(id));
    if(!post) {
        return res.status(404).json({ message: 'Post cant be found to change!' });
    }

    if(title) post.title = title;
    if(content) post.content = content;

    res.status(200).json(post);
});

module.exports = postRouter;