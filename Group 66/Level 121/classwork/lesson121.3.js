//  შექმენით ობიექტების/მომხმარებლების მასივი სადაც მინიმუმ 3 მომხმარებელი გექნებატ firstname, lastname და age კუთვნილებებით, თუ ბილიკი იქნება /0 დაუბრუნეთ User is {firstname} {lastname} and {age} years old, ინდექსების მიხედვიტ თუ ინდექსი არ არსებულია დაუბრუნეთ Invalid Req

const http = require('http');

const users = [
    {firstname: 'Nini', lastname: 'Pheradze', age: 15},
    {firstname: 'Lali', lastname: 'Pheradze', age: 11},
    {firstname: 'Elene', lastname: 'Pheradze', age: 10},
];


const server = http.createServer((req, res) => {
    const index = req.url.slice(1);

    if (users[index]) {
        const user = users[index];
        res.end(
            `User is ${user.firstname} ${user.lastname} and ${user.age} years old`
        );
    } else {
        res.end('Invalid!');
    }
});

server.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
})