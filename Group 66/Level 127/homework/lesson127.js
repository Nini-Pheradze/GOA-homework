// კომენტარების სახით ახსენით თუ რა არის express - ი
// Express არის Node.js–ის პოპულარული framework (ბიბლიოთეკა),
// რომელიც ამარტივებს backend სერვერების შექმნას.

// Express გვაძლევს მზა მექანიზმებს HTTP სერვერთან მუშაობისთვის,
// როგორიცაა routing (ბილიკები), middleware-ები და request/response-ის მართვა.

// Express-ის გამოყენებით აღარ გვჭირდება http.createServer ხელით,
// რადგან framework თავად მართავს სერვერის ლოგიკას.

// Express საშუალებას გვაძლევს მარტივად შევქმნათ REST API-ები
// (GET, POST, PUT, DELETE მეთოდებით).

// ასევე Express ამარტივებს:
// - request body-ს წაკითხვას
// - query და params-ებთან მუშაობას
// - status code-ების დაბრუნებას
// - JSON მონაცემების გაგზავნას

// მოკლედ: Express არის ინსტრუმენტი,
// რომელიც Node.js-ზე backend კოდის წერას ხდის უფრო მარტივს,
// სუფთას და პროფესიონალურს.


//  შექმენით მასივი სადაც შენახავთ მომხმარებლების ობიექტებს, შექმენით ბილიკი '/users' და დააბრუნეთ მოცემული მომხმარებლების მასივი json - ის ფორმატში, შემდეგ კი დაამატეთ ახალი ბილიკი '/users/:id' (მოიძიეთ ინფორმაცია პარამეტრების შესახებ express js - ში), გადმოცემული id - ით იპოვეთ users მასივში კონკრეტული მომხმარებელი და დააბრუნეთ მისი მონაცემები json - ის ფორმატში, აგრეთვე დაამატეთ get მოთხოვნა მოცემულ ბილიკზე '/users/random' რომელიც მოცემულ მასივიდან ამოიღებს random user - ს და დააბრუნებს მის ობიექტს

const express = require('express');
const app = express();
const PORT = 3000;


const users = [
    { id: 1, name: "გიორგი", age: 25 },
    { id: 2, name: "ნინო", age: 30 },
    { id: 3, name: "ლუკა", age: 22 },
    { id: 4, name: "ანა", age: 28 }
];


app.get('/users', (req, res) => {
    res.json(users);
});


app.get('/users/random', (req, res) => {
    const randomIndex = Math.floor(Math.random() * users.length);
    const randomUser = users[randomIndex];
    res.json(randomUser);
});


app.get('/users/:id', (req, res) => {
    const userId = Number(req.params.id);
    const user = users.find(u => u.id === userId);

    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: "მომხმარებელი ვერ მოიძებნა" });
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});