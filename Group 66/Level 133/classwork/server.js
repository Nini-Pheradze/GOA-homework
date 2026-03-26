const express = require('express');
const app = express();
const postRouter = require('./router/posts.router');

app.use('/posts', postRouter);

app.listen(3000, () => {
    console.log("http://localhost:3000")
});