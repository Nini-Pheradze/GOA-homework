// 2) შექმენით ბილიკი '/cart', მოუსმინეთ მოთხოვნებს post, get, delete, უნდა შეგეძლოთ cart - შ ახალი item - ის ჩამატება წაშლა და ელემენტების წამოღება (მთლიანად და id - ის მიხედვით)

const express = require("express");
const app = express();

app.use(express.json());

const PORT = 3000;

// დროებითი cart (მასივი)
let cart = [
    { id: 1, name: "Apple", price: 2 },
    { id: 2, name: "Banana", price: 1 }
];


app.get('/cart/:id', (req, res) => {
    const { id } = req.params;
    const item = cart.find((el) => el.id ===  Number(id));


    if (!item) {
        return res.status(404).json({message: "Item not found"});
    }

    res.json(item);
});

app.post("/cart", (req, res) => {
    const { name, price } = req.body;

    if (!name || !price) {
        return res.status(400).json({ message: "Name and price are required" });
    }

    const newItem = {
        id: Date.now(),
        name,
        price
    };

    cart.push(newItem);
    res.status(201).json(newItem);
});


app.delete("/cart/:id", (req, res) => {
    const id = Number(req.params.id);
    const index = cart.findIndex(el => el.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "Item not found" });
    }

    const deletedItem = cart.splice(index, 1);
    res.json(deletedItem[0]);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});