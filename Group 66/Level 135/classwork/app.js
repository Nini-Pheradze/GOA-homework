const express = require('express');
const morgan = require('morgan');

const hotelsRouter = require('./routes/hotels.routes');

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.use('/hotels', hotelsRouter);

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
