const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Main page");
});


app.get("/about", (req, res) => {
    res.send("This is about page");
});


app.get("/contact", (req, res) => {
    res.send("Contact us");
});

app.get("/users", (req, res) => {
    res.send("Users list");
});


app.get("/products", (req, res) => {
    res.send("Products list");
});


app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

