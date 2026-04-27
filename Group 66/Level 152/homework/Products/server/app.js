const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const productRouter = require('./routers/product.router');
const authRouter = require('./routers/auth.router');

const app = express();

app.use(cors({
    origin: "*"
}));

app.use(express.json());

app.use('/api/auth', authRouter);
app.use('/api/products', productRouter);

mongoose.connect('mongodb://localhost:27017/OnlineShopping')
    .then(() => {
        console.log("MongoDB is conected successfully!");

        app.listen(3000, () => {
            console.log("The server is running on server 3000");
        });
    }).catch((err) => {
        console.log(err);
    });
