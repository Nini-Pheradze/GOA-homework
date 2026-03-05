// 2) შექმენით მასივი და შეინახეთ მასში მომხმარებლების ობიექტები შემდეგი კუთვნილებებით name, surname, age, active ---> true or false, იმ შემთხვევაში თუ მომხმარებელმა query - სახით შემოიტანა ?active=true მაშინ გამოიტანეთ ყველა ის მომხმარებლის ობიექტი რომლის active კუთვნილებაც უდრის true - ს სხვა შემთხვევაში კი პირიქით (გამოიტანეთ ყველა იმ მომხმარებელის ობიექტი რომლის active კუთვნილებაც უდრის false - ს

const express = require('express');
const app = express();
const PORT = 3000;

const users = [
    { name: 'Gigi', surname: 'Gorgadze', age: 25, active: true },
    { name: 'Nino', surname: 'Lomidze', age: 30, active: false },
    { name: 'Luka', surname: 'Beridze', age: 22, active: true },
    { name: 'Ana', surname: 'Kapanadze', age: 28, active: false }
];

app.get('/users', (req, res) => {
    const { active } = req.query;

    if (active === undefined) {
        return res.status(400).json({ 
            error: "გთხოვთ მიუთითოთ ?active=true ან ?active=false" 
        });
    }

    const isActiveQuery = active === 'true';

    const filteredUsers = users.filter(({ active: userStatus }) => {
        return userStatus === isActiveQuery;
    });

    res.json(filteredUsers);
});

app.listen(PORT, () => {
    console.log(`სერვერი ჩართულია: http://localhost:${PORT}/users?active=true`);
});