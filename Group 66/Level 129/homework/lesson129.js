// მოუსმინეთ GET მოთხოვნას '/users/:id?favouriteFilm={favoriteFilm}, მოცემულ ბილკზე, თქვენი დავალებაა, რომ id პარამეტრის გამოყენებით თქვენს მიერ შექმნილ მასივში მოცემული მომხმარებელი იპოვოთ მოიპოვოთ favouriteFilm - კუთვნილებაზე წვდომა და დააბრუნოთ პასუხი შემდეგნაირად, მაგალითად ---> '/users/1?favouriteFilm=exampleFilm ---> returns 'user 1's favourite film to watch is exampleFilm'

const express = require('express');
const app = express();
const PORT = 3000;

const users = [
    { id: 1, name: "ლალი" },
    { id: 2, name: "ნინო" },
    { id: 3, name: "ელენე" }
];

app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    const favFilm = req.query.favouriteFilm;
    const userExists = users.find(u => u.id === Number(userId));

    if (!userExists) {
        return res.status(404).send("მომხმარებელი ვერ მოიძებნა");
    }
    if (!favFilm) {
        return res.status(400).send("გთხოვთ, მიუთითოთ ფილმის სახელი (?favouriteFilm=...)");
    }
    res.send(`user ${userId}'s favourite film to watch is ${favFilm}`);
});



// 3) მოუსმინეთ POST მოთხოვნას '/guess/:number' მოცემულ ბილიკზე, შეამოწმეთ თუ მომხმარებლის მიერ შემოტანილი number პარამეტრი უდრის თქვენს random რიცხვს, json - ის ფორმატში დააბრუნეთ პასუხი 'You guessed the random number', თუ თქვენს რიცხვზე ნაკლებია გამოიტანეთ 'Your number is low', თუ მეტია 'Your number is higher than the random number, try again later.'

const randomNumber = Math.floor(Math.random() * 10) + 1;

app.post('/guess/:number', (req, res) => {
    const userGuess = Number(req.params.number);

    if (userGuess === randomNumber) {
        return res.json({ message: 'You guessed the random number' });
    } else if (userGuess < randomNumber) {
        return res.json({ message: 'Your number is low' });
    } else {
        return res.json({ message: 'Your number is higher than the random number, try again later.' });
    }
});

// 4) მოუსმინეთ Delete მოთხოვნას '/tasks?id={id}' მოცემულ ბილიკზე, შეამოწმეთ თუ მოცემული id - ით task - არსებობს მაშინ წაშალეთ და დააბრუნეთ შესაბამისი message, სხვა შემთხვევაში კი დააბრუნეთ error - ის message - ი შესაბამისი status code - ით

let tasks = [
    { id: 1, title: "Learn Node.js" },
    { id: 2, title: "Master Express" },
    { id: 3, title: "Build an API" }
];

app.delete('/tasks', (req, res) => {
    const taskId = Number(req.query.id);
    const taskIndex = tasks.findIndex(t => t.id === taskId);

    if (taskIndex !== -1) {
        tasks = tasks.filter(t => t.id !== taskId);
        res.json({ message: `Task with id ${taskId} deleted successfully` });
    } else {
        res.status(404).json({ error: "Task not found with the provided id" });
    }
});

app.listen(PORT, () => {
    console.log(`სერვერი ჩართულია: http://localhost:${PORT}`);
});