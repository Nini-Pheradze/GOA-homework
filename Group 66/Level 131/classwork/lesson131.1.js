// 1) დაარეგისტრირეთ 3 Route, პირველი GET /products რომელიც უბრალოდ აბრუნებს ყველა პროდუქტს, მეორე GET /products/:id რომელიც აბრუნებს ერთ პროდუქტს (ჩაატარეთ შემოწმება მოიძიება თუ არა კონკრეტული პროდუქტი), მესამე DELETE /products/:id რომელიც წაშლის მასივიდან პროდუქტს (სანამ წაშლით შეამოწმეთ არსებობს თუ არა პროდუქტი და შემდეგ წაშალეთ)

const express = require('express');
const app = express()

let products = [
    { id: 1, name: "iPhone 15", price: 900 },
    { id: 2, name: "Samsung S23", price: 850 },
    { id: 3, name: "Google Pixel 8", price: 700}
];

app.get('/products', (req, res) => {
    res.json(products);
});


app.get('/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const product = products.find(p => p.id === productId);

    if (!product) {
        res.status(404).json({ message: "product does not exists" });
    }

    res.json(product)
});

app.delete('/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    
    const index = products.findIndex(p => p.id === productId);
    if (index === -1) {
        return res.status(404).json({ message: "პროდუქტი ვერ მოიძებნა" });
    }

    products.splice(index, 1);

    res.json({ message: "წარმატებით წაიშალა", products });
});

app.listen(3000, () => console.log("Server is listening on port 3000"));







