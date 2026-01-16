const express = require("express");
const morgan = require("morgan");
const studentsRoutes = require("./routes/students.routes");

const app = express();

/*
    express.json() არის built-in middleware
    მისი დანიშნულებაა JSON ფორმატში მოსული მონაცემების წაკითხვა
    POST / PUT / PATCH მოთხოვნების დროს
    მის გარეშე req.body იქნება undefined
*/
app.use(express.json());

/*
    morgan არის third-party middleware
    ის ლოგავს ყველა შემოსულ HTTP request-ს ტერმინალში
    (method, url, status code, response time)
    გამოიყენება დებაგინგისა და მონიტორინგისთვის
*/
app.use(morgan("dev"));

// Students routes
app.use("/students", studentsRoutes);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});


