// 1) შექმენით 3 html ფაილი მაგ: index, about, login, ჩაწერეთ ამ HTML ფაილებში შესაბამისი კოდი და მოათავსეთ ისინი pages ფოლდერში, შემდეგ შექმენიტ სერვერი, რომელიც ბილიკის სახელის მიხედვიტ დააბრუნებს სერვერიდან html ფაილს მაგ: /home დაუბრუნეთ index.html ფაილი და ასშ (ამის გასაკეთებლად მოიძიეთ ინფორმაცია როგორ უნდა დააბრუნოთ სერვერიდან html ფაილები, აგრეთვე გამოიყენეთ writeHead თუ საჭიროება მოითხოვს.

// const http = require('http');
// const fs = require('fs');
// const path = require('path');

// const homePage = fs.readFileSync('./pages/index.html');
// const aboutPage = fs.readFileSync('./pages/about.html');
// const loginPage = fs.readFileSync('./pages/login.html');


// const server = http.createServer((res, req) => {
//     res.writeHead(200, { 
//             'Content-Type': 'text/html'
//         });
    
//         if (req.url === '/') {
//             res.end(homePage);
//         } else if (req.url === '/about') {
//             res.end(aboutPage);
//         } else {
//             res.end('<h1>Not Found</h1>')
//         }
// });

// server.listen(3000, () => {
//     console.log('Server is running on http://localhost:3000');
// });


const http = require('http');
const fs = require('fs');

const homePage = fs.readFileSync('./pages/index.html');
const aboutPage = fs.readFileSync('./pages/about.html');
const loginPage = fs.readFileSync('./pages/login.html');

const server = http.createServer((req, res) => { 
    res.writeHead(200, { 'Content-Type': 'text/html' });

    if (req.url === '/' || req.url === '/home') {
        res.end(homePage);
    } else if (req.url === '/about') {
        res.end(aboutPage);
    } else if (req.url === '/login') {
        res.end(loginPage);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 Not Found</h1>');
    }
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
