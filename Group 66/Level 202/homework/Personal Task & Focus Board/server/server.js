const express = require('express');
const passport = require('passport');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());


require('./config/passport.config');

app.use('/auth', require('./routes/auth.route'));

mongoose.connect(process.env.MONGODB_URI)
    .then(() => app.listen(3000, () => console.log('Server running on 3000')));