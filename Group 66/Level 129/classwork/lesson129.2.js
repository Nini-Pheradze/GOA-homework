// Route is a defined endpoint(url with method) in the server where specific requests can be made by client to perform certain actions or retrieve data.

// Routing is process where server is checking methods and url to match registered routes, when it matches then server returns responso 

// app.get('/', (req, res) => {
//     res.status(200).json({ message: 'Welcome to the homepage!' });
// });

// app.post('/login', (req, res) => {
//     res.status(200).json({ message: 'Login successful!' });
// });


// Example of routing wioth vanila node.js

// if(req.method === 'GET' && req.url === '/'){
//     res.status(200).json({ message: 'Welcome to the homepage!' });
// } else if(req.method === 'POST' && req.url === '/login'){
//     res.status(200).json({ message: 'Login successful!' });
// }




// შექმენიტ სერვერი სადაც გექნებათ 5 განსხვავებული Route, თითოეული უნდა აბრუნებდეს სხვადასხვა ინფოს. ახსენით რა არის Route და Routing კომენტარებით





// შექმენით GET ტიპის Route /products, რომელსაც მოთხოგვნის გაგზავნისას თან უწერთ querys. example: GET /products?id=2
// თვენი დავალებაა მოიძიოთ ინფროიმაცია როგორ უნდა წაიკითხოთ query express ში, შემდეგ შესაბამისი ID მოიძიეთ პროდუქტი მასივში, თუ იპოვეთ დაუბრუნეთ ეგ პროდუქტი სტატუსის კოდით 200  json ფორმატში, სხვა შემტხვევაში 404 {message: "Product cant be found"}


const express = require("express");
const app = express();


const products = [
    { id: 1, name: "Laptop", price: 4500 },
    { id: 2, name: "Phone", price: 2500 },
    { id: 3, name: "Headphones", price: 650 },
];

app.get('/products', (req, res) => {
    const {id} = req.query;

    const product = products.find(p => p.id === Number(id));

    if(!product) {
        return res.status(404).json({
            message: "Product cannot be found",
        });
    }

        res.status(200).json(product);
});




app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
