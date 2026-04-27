const express = require("express");
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();


// middleware
app.use(cors());

// to read request
app.use(morgan('dev'));


// testing route
app.get('/api/test', (req, res) => {
    res.send('Server is running!');
});

mongoose.connect('mongodb://localhost:27017/phera')
    .then(() => {
        console.log('Connected to mongoDb!');

        app.listen(3000, () => {
            console.log("Server is listening on port 3000!");
        });
    })
    .catch((err) => console.log(err));
