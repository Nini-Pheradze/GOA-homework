const express = require("express");
const app = express();


const products = [
    { id: 1, name: "Laptop", price: 4500 },
    { id: 2, name: "Phone", price: 2500 },
    { id: 3, name: "Headphones", price: 650 },
];


app.get("/products/:name", (req, res) => {
    const { name } = req.params;

    const product = products.find(
        (product) => product.name === name
    );


    if (!product) {
        return res.status(404).json({
            message: "Product cannot be found",
        });
    }

    res.status(200).json(product);
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});