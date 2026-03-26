// server.js
const express = require('express');
const postsRouter = require('./routers/posts.router');

const app = express();

app.use('/posts', postsRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});