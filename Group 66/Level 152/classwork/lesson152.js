//  შექმენით CRUD ოპერაცია მთლიანად user ზე, უნდა ხდებოდეს მომხმარებლის რეგისტრაცია, ავტორიზაცია, ყველა მომხმარებლის ნახვა, ერთი მომხმარებლის ნახვა ID, მომხმარებლის წაშლა და განახლება. GET, POST, DELETE, PATCH 

const express = require('express');
const app = express();

app.use(express.json());

let users = [];

app.post('/register', (req, res) => {
    const { username, password } = req.body;

    if(!username || !password) {
        return res.status(400).send("გთხოვთ შეავსოთ ყველა ველი");
    }

    const newUser = {
        id: (users.length + 1).toString(),
        username,
        password
    };

    users.push(newUser);
    res.status(201).json({ message: 'Successfully registred!', user: newUser });
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        res.send(`Welcome, ${user.username}! Logged in succesfully.`);
    } else {
        res.status(401).send("Incorrect name or password");
    }
});

app.get('/users', (req, res) => {
    res.json(users)
});

app.get('/users/:id', (req, res) => {
    const user = users.find(u => u.id === req.params.id);
    if (!user) return res.status(404).send("მომხმარებელი ვერ მოიძებნა");
    res.json(user);
});

app.patch('/users/:id', (req, res) => {
    const user = users.find(u => u.id === req.params.id);
    if (!user) return res.status(404).send("მომხმარებელი ვერ მოიძებნა");

    const { username, password } = req.body;
    if (username) user.username = username;
    if (password) user.password = password;

    res.json({ message: "მონაცემები განახლდა", user });
});

app.delete('/users/:id', (req, res) => {
    const index = users.findIndex(u => u.id === req.params.id);
    if (index === -1) return res.status(404).send("მომხმარებელი ვერ მოიძებნა");

    const deletedUser = users.splice(index, 1);
    res.json({ message: "მომხმარებელი წაიშალა", user: deletedUser[0] });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on: http://localhost:${PORT}`);
});
