const express = require("express");
const morgan = require("morgan");
const phonesRoutes = require("./routes/phones.routes");

const app = express();

/*
    express.json() არის built-in middleware
    კითხულობს JSON body-ს და ავსებს req.body-ს
*/
app.use(express.json());

/*
    morgan არის third-party middleware
    ლოგავს ყველა HTTP request-ს ტერმინალში
*/
app.use(morgan("dev"));

// phones routes
app.use("/phones", phonesRoutes);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
