const express = require('express');

const authRouter = require('./routers/auth.router');
const connectDB = require('./config/mongo.config');

const app = express();

app.use(express.json());

app.use('api/auth', authRouter);

app.use((err, req, res, next) => {
    console.log("Error from first middleware", err)
});

app.use((err, req, res, next) => {
    console.log("Error caught by global handler:", err);
    res.status(err.statusCode || 500).json({
        status: 'error',
        message: err.message || 'Something went wrong!'
    });
});

app.listen(3000, () => {
    console.log("Server is running on 3000!");
    connectDB();
});