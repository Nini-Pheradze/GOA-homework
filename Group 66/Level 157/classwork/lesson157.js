const express = require('express');

// Routers
const authRouter = require('./routers/auth.router');

// Configs
const connectDB = require('./config/mongo.config');

const app = express();

// Helper middlewares

// To parse incoming JSON body
app.use(express.json());

// Routers
app.use('/api/auth', authRouter);

// Global Error handler
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const status = err.status || 'error';

    res.status(statusCode).json({
        status,
        message: err.message,
    });
});

app.listen(3000, () => {
    console.log('Server is running at 3000!');
    connectDB();
});