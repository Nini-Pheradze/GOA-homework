// შექმენით მასივი სადაც შეინახავთ წიგნების ობიექტებს, მოუსმინეთ GET მოთხოვნას '/books' ბილიკზე, და დააბრუნეთ წიგნების ობიექტები, აგრეთვე მოუსმინეთ GET მოთხოვნას '/books/:id' მოცემულ ბილიკზე რომელიც დააბრუნებს წიგნს id - ის მიხედვით

const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

const books = [
    { id: 1, title: "ვეფხისტყაოსანი", author: "შოთა რუსთაველი", year: 1200 },
    { id: 2, title: "დათა თუთაშხია", author: "ჭაბუა ამირეჯიბი", year: 1973 },
    { id: 3, title: "გალაკტიონი", author: "გალაკტიონ ტაბიძე", year: 1915 },
    { id: 4, title: "ნატვრის ხე", author: "გიორგი ლეონიძე", year: 1962 }
];

app.get('/books', (req, res) => {
    res.json(books);
});

app.post('/books', (req, res) => {
    const newBook = {
        id: books.length + 1,
        title: req.body.title, 
        author: req.body.author,
        year: req.body.year
    };
    books.push(newBook);
    res.status(201).json(newBook);
});

app.delete('/books/:id', (req, res) => {
    const bookID = parseInt(req.params.id);
    const bookIndex = books.findIndex(b => b.id === bookID);

    if (bookIndex !== -1) {
        // წაშლა მასივიდან
        const deletedBook = books.splice(bookIndex, 1);
        res.json({ message: "წიგნი წარმატებით წაიშალა", book: deletedBook[0] });
    } else {
        res.status(404).json({ message: "წიგნი ვერ მოიძებნა და ვერ წაიშლება" });
    }
});

app.get('/books/:id', (req, res) => {
    const bookID = parseInt(req.params.id);
    const book = books.find(b => b.id === bookID);

    if (book) {
        res.json(book);
    } else {
        res.status(404).json({ message: "წიგნი მითითებული ID-ით ვერ მოიძებნა" });
    }
});

app.listen(PORT, () => {
    console.log(` http://localhost:${PORT}`);
});