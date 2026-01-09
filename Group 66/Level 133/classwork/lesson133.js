// 1) შექმენით express სერვერი, რომელიც განკუთვნილია სოციალური ქსელის ვებსაიტისთვის. შექმენიტ მასივი posts სადაც თავიდანვე 3 ობიექტი იქნება მოცემული სტრუქტურით {id, title, content}, შემდეგ დაამატეთ ყველა საჭირო CRUD ოპერაცია.

// 1) ყველა პოსტის დაბრუნება.
// 2) ერთი კონკრეტული პოსტის დაბრუნება ID დახმარებით.
// 3) ახალი პოსტის შექმნა query დახმარებით.
// 4) პოსტის წაშლა ID დახმარებით.
// 5) პოსტის განახლება ID და query დახმარებით.

const express = require('express');
const postsRouter = require('./routers/posts.router');

const app = express();
app.use(express.json());

app.use('/posts', postsRouter);

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});



// 2) გააკეთეთ თქვენი კოდის რეკონსტრუქცია, გამოიყენეთ Router კოდის გასამარტივებლად.

// შექმენით ფოლდერი სახელად routers და ფაილი სახელად posts.router.js

const express = require('express');
const router = express.Router();

// სატესტო მონაცემები
let posts = [
    { id: 1, title: 'First Post', content: 'Hello World' },
    { id: 2, title: 'Second Post', content: 'My second post' },
    { id: 3, title: 'Third Post', content: 'Express is cool' }
];


router.get('/', (req, res) => {
    res.json(posts);
});


router.get('/:id', (req, res) => {
    const post = posts.find(p => p.id === Number(req.params.id));
    res.json(post || { message: 'Post not found' });
});


router.post('/', (req, res) => {
    const { title, content } = req.query;

    const newPost = {
        id: Date.now(),
        title,
        content
    };

    posts.push(newPost);
    res.json(newPost);
});


router.delete('/:id', (req, res) => {
    posts = posts.filter(p => p.id !== Number(req.params.id));
    res.json({ message: 'Post deleted' });
});


router.patch('/:id', (req, res) => {
    const post = posts.find(p => p.id === Number(req.params.id));
    if (!post) return res.json({ message: 'Post not found' });

    if (req.query.title) post.title = req.query.title;
    if (req.query.content) post.content = req.query.content;

    res.json(post);
});

module.exports = router;
