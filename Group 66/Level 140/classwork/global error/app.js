const express = require('express');
const app = express();

app.use(express.json());
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';

    console.error(`[ERROR]: ${message} (Status Code: ${statusCode})`);

    res.status(statusCode).json({
        status: `${statusCode}`.startsWith('4') ? 'fail' : 'error',
        message: message
    });
});


const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});