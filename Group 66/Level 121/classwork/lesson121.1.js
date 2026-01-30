//  შექმენით web app/server http მოდულის დახმარებით Node.js, როდესაც მიიღებთ მოთხოვნას დაუბრუნეთ პასუხად თქვენი სახელი და გვარი

const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    res.end('<h1>Nini Pheradze</h1>');
});

server.listen(3000, () => {
    console.log('Server is listening');
});


//  შექმენით ობიექტების/მომხმარებლების მასივი სადაც მინიმუმ 3 მომხმარებელი გექნებატ firstname, lastname და age კუთვნილებებით, თუ ბილიკი იქნება /0 დაუბრუნეთ User is {firstname} {lastname} and {age} years old, ინდექსების მიხედვიტ თუ ინდექსი არ არსებულია დაუბრუნეთ Invalid Req



const users = [
    { firstname: 'Nini', lastname: 'Pheradze', age: '15'},
    { firstname: 'Lalo', lastname: 'Pheradze', age: '11'},
    { firstname: 'Elene', lastname: 'Pheradze', age: '10'}
];

const server1 = http.createServer((req, res) => {
    const index = parseInt(path.substring(1));

    if (!isNaN(index) && users[index]) {
        const user = users[index];
        return `User is ${user.firstname} ${user.lastname} and ${user.age} years old`;
    } else {
        return "Invalid Req";
    }
});

server1.listen(3000, () => {
    console.log('Server is listening!');
});