// 1) შექმენიტ სერვერი სადაც გექნებათ 5 განსხვავებული Route, თითოეული უნდა აბრუნებდეს სხვადასხვა ინფოს. ახსენით რა არის Route და Routing კომენტარებით.
// გამოიყენეთ Express

/**
 * განმარტებები:
 * * ROUTING (როუტინგი) - ეს არის პროცესი, რომლის დროსაც აპლიკაცია განსაზღვრავს,
 * თუ როგორ უნდა უპასუხოს კლიენტის მოთხოვნას კონკრეტულ მისამართზე (Endpoint).
 * * ROUTE (როუტი) - ეს არის კონკრეტული მისამართი (URL ბილიკი) და HTTP მეთოდი (GET, POST და ა.შ.),
 * რომელიც დაკავშირებულია კონკრეტულ ფუნქციასთან (Handler).
 */

const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send("Welcome to our main site!");
});

app.get('/about', (req, res) => {
    res.json({
        company: "GOA"
    });
});


app.get('/contact', (req, res) => {
    res.send('+995 555 00 00 00');
});

app.get('/services', (req, res) => {
    res.json(['Web Development', 'Mobile Apps', 'Cyber Security', 'UI/UX Design']);
});


app.get('/time', (req, res) => {
    const currentTime = new Date().toLocaleTimeString();
    res.send(`ამჟამად არის: ${currentTime}`);
});

app.listen(PORT, () => {
    console.log(`სერვერი მუშაობს მისამართზე: http://localhost:${PORT}`);
});
