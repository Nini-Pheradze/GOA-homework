const express = require('express');
const app = express();
const carRoutes = require('./cars');
const userRoutes = require('./users');

app.use(express.json());

app.use('/cars', carRoutes);
app.use('/users', userRoutes);

const Port = 3000;
app.listen(Port, () => {
    console.log('Server is listening!');
});