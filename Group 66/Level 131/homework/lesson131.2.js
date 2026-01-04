//  შექმენით CRUD ოპერაცია posts - ებზე, query - ში არსებული role - ის მნიშვნელობა კი შეამოწმეთ, თუ admin - ია მაშინ უნდა შეგეძლოთ post - ის წაშლა და დამატება, სხვა შემთხვევაში კი უბრალოდ წამოღება

const express = require('express');
const app = express();

app.use(express.json());

let posts = [];


app.get('/posts', (req, res) => {
    res.status(200).json(posts);
    });


    app.get('/posts/:id', (req, res) => {
    const id = Number(req.params.id);
    const post = posts.find(p => p.id === id);

    if (!post) {
        return res.status(404).json({ message: 'Post not found' });
    }

    res.status(200).json(post);
    });


    app.post('/posts', (req, res) => {
    const { role } = req.query;
    const { title, content } = req.body;

    if (role !== 'admin') {
        return res.status(403).json({ message: 'Access denied' });
    }

    if (!title || !content) {
        return res.status(400).json({ message: 'title and content are required' });
    }

    const newPost = {
        id: posts.length ? posts[posts.length - 1].id + 1 : 1,
        title,
        content
    };

    posts.push(newPost);
    res.status(201).json(newPost);
    });


    app.delete('/posts/:id', (req, res) => {
    const { role } = req.query;
    const id = Number(req.params.id);

    if (role !== 'admin') {
        return res.status(403).json({ message: 'Access denied' });
    }

    const index = posts.findIndex(p => p.id === id);
    if (index === -1) {
        return res.status(404).json({ message: 'Post not found' });
    }

    const deletedPost = posts.splice(index, 1);
    res.status(200).json(deletedPost[0]);
    });


    app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
