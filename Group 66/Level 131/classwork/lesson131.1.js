// 1) დაარეგისტრირეთ 3 Route, პირველი GET /products რომელიც უბრალოდ აბრუნებს ყველა პროდუქტს, მეორე GET /products/:id რომელიც აბრუნებს ერთ პროდუქტს (ჩაატარეთ შემოწმება მოიძიება თუ არა კონკრეტული პროდუქტი), მესამე DELETE /products/:id რომელიც წაშლის მასივიდან პროდუქტს (სანამწ აშლით შეამოწმეთ არსებობს თუ არა პროდუქტი და შემდეგ წაშალეთ)

const express = require('express');

const app = express();

const products = [
    { id: 1, name: 'Laptop', price: 2500 },
    { id: 2, name: 'Phone', price: 1500 },
    { id: 3, name: 'Tablet', price: 900 }
];

app.get('/products', (req, res) => {
    res.status(200).json(products);
});


app.get('/products/:id', (req, res) => {
    const id = Number(req.params.id);

    const product = products.find(p => p.id === id);

    if (!product) {
        return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json(product);
});



app.delete('/products/:id', (req, res) => {
    const id = Number(req.params.id);

    const index = products.findIndex(p => p.id === id);

    if (index === -1) {
        return res.status(404).json({ message: 'Product not found' });
    }


    const deletedProduct = products.splice(index, 1);


    res.status(200).json({
        message: 'Product deleted successfully',
        product: deletedProduct[0] 
    });
});


app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});








