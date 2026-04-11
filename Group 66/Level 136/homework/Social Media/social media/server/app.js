const express = require('express');
const cors = require('cors');

const authRouter = require('./routers/auth.router.js'); 

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRouter); 

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});