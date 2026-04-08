const express = require('express');
const morgan = require('morgan');
const bikeRouter = require('./routes/bikeRoutes');

const app = express();

app.use(morgan('dev'));
app.use(express.json()); 

app.use('./api/bikes', bikeRouter);

app.listen(3000, () => console.log('Server is running on port 3000'))