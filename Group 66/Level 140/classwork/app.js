const express = require('express');
const postRouter = require('./routes/postRoutes');

const app = express();

app.use(express.json());


app.use('/api/v1/posts', postRouter);

const port = 3000;
app.listen(port, () => {
    console.log(`სერვერი ჩაირთო პორტზე ${port}...`);
});