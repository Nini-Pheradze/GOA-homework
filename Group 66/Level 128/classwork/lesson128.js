// 1) შექმენით მასივი სადაც შეინახავთ წიგნების ობიექტებს, მოუსმინეთ GET მოთხოვნას '/books' ბილიკზე, და დააბრუნეთ წიგნების ობიექტები, აგრეთვე მოუსმინეთ GET მოთხოვნას '/books/:id' მოცემულ ბილიკზე რომელიც დააბრუნებს წიგნს id - ის მიხედვით

const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let books = [
    { id: 1, title: "1984", author: "George Orwell" },
    { id: 2, title: "The Hobbit", author: "J.R.R. Tolkien" },
    { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald" }
];

app.get('/books', (req, res) => {
    res.json(books);
});


app.get('/books/:id', (req, res) => {
    const bookId = Number(req.params.id);
    const book = books.find(b => b.id === bookId);

    if (book) {
        res.json(book);
    } else {
        res.status(404).json({ message: "წიგნი ვერ მოიძებნა" });
    }
});

app.post('/books', (req, res) => {
    const newBook = {
        id: books.length + 1, 
        title: req.body.title,
        author: req.body.author
    };

    books.push(newBook);
    res.status(201).json(newBook);
});

app.delete('/books/:id', (req, res) => {
    const bookId = Number(req.params.id);
    const initialLength = books.length;
    books = books.filter(b => b.id !== bookId);

    if (books.length < initialLength) {
        res.json({ message: `წიგნი ID-ით ${bookId} წარმატებით წაიშალა` });
    } else {
        res.status(404).json({ message: "წიგნი წასაშლელად ვერ მოიძებნა" });
    }
});

// 2) დაამატეთ POST მეთოდიც გააგზავნეთ მოთხოვნა '/books' ბილიკზე postman - ის გამოყენებით გააგზავნეთ წიგნის ინფორმაცია და დაამატეთ ის books მასივში


// 3) მოუსმინეთ DELETE მეთოდსაც '/books/:id' ამ ბილიზე, გადმოცემული id - ით books მასივში არსებული წიგნი წაშალეთ

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});