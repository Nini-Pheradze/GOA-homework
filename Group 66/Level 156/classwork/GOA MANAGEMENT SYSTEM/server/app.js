const express = require('express');
const mongoose = require('mongoose')
const studentRouter = require('./routers/student.router');

const app = express();

// helper middleware functions
app.use(express.json());

// Routers
app.use('/api/student', studentRouter);

mongoose.connect('mongodb://localhost:27017/GOA')
    .then(() => {
        console.log("Connected to DB!");
        app.listen(3000, () => {
            console.log("Server Started!");
        });
    })