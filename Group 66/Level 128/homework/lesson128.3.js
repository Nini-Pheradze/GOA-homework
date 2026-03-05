// BONUS
// 3) მოუსმინეთ PATCH მოთხოვნას '/users/:id' ბილიკზე, თქვენი დავალებაა, რომ მოცემული id - ით წვდომა მოიპოვოთ შესაბამისი მომხმარებლის ობიექტზე და გაანახლოთ რამოდენიმე კუთვნილება, განახლებული მომხმარებლის ობიექტი შეინახოთ ძველი ობიექტის ნაცვლად, გატესტეთ მუშაობა postman - ის გამოყენებით

const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let users = [
    { id: 1, name: 'Gigi', surname: 'Gorgadze', age: 25, active: true },
    { id: 2, name: 'Nino', surname: 'Lomidze', age: 30, active: false },
    { id: 3, name: 'Luka', surname: 'Beridze', age: 22, active: true }
];

app.get('/users', (req, res) => res.json(users));

app.patch('/users/:id', (req, res) => {
    const { id } = req.params;
    const updates = req.body;

    const userIndex = users.findIndex(u => u.id === Number(id));

    if (userIndex !== -1) {
        users[userIndex] = { ...users[userIndex], ...updates };

        res.json({
            message: "მომხმარებელი წარმატებით განახლდა!",
            user: users[userIndex]
        });
    } else {
        res.status(404).json({ message: "მომხმარებელი ვერ მოიძებნა" });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));