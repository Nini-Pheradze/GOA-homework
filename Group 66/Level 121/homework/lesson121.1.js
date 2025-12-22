//  შექმენით web application, სადაც JSON - ის ფორმატით დააბრუნებთ პასუხს, მაგალითად დააბრუნეთ თქვენს შესახებ ინფორმაცია JSON - ის ფორმატში

const http = require('http');

const server = http.createServer((req, res) => {
    const myInfo = {
        fullname: 'Nini Pheradze',
        age: 15,
        profession: 'Web Developer'
    };

    res.end(JSON.stringify(myInfo));
});

server.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
})