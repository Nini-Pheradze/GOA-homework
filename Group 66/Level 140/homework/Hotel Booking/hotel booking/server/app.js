const express = require('express');
const app = express();

const userRouter = require("./routers/user.routes");
const hotelRouter = require("./routers/hotel.routes");

app.use(express.json());

app.use('/user', userRouter);
app.use('/hotel', hotelRouter);

app.listen(3000, () => {
    console.log("server is listenong on http://localhost:3000");
});
