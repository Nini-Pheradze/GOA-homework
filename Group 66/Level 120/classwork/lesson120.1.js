//  შექმენით web app/server http მოდულის დახმარებით Node.js, როდესაც მიიღებთ მოთხოვნას დაუბრუნეთ პასუხად თქვენი სახელი და გვარი

const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    res.end('<h1>Nini Pheradze</h1>');
});

server.listen(3000, () => {
    console.log('Server is listening');
});

// req.url გამოყენებით გააკეთეთ სერვერი რომელიც თუ მოთხოვნა გამოგზავნილი იქნება /fullname დაუბრუნეთ თქვენი სახელი გვარი, /firstname დაუბრუნეთ მხოილოდ თქვენი სახელი /lastname დაუბრუნეთ გვარი, თუ არცერთი ბილიკი არ იქნება დაუბრუნეთ Invalid path ეს ტექსტი

//  შექმენით ობიექტების/მომხმარებლების მასივი სადაც მინიმუმ 3 მომხმარებელი გექნებატ firstname, lastname და age კუთვნილებებით, თუ ბილიკი იქნება /0 დაუბრუნეთ User is {firstname} {lastname} and {age} years old, ინდექსების მიხედვიტ თუ ინდექსი არ არსებულია დაუბრუნეთ Invalid Req