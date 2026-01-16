const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('First middleware executed');

    next();
});

app.use((req, res) => {
    console.log('Second middleware executed');
    res.send('Hello from second middleware');
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});



// შუალედურ ფუნქცია

// შესრულება მოთხოვნა-პასუხის ციკლის დროს
// შეუძლია მოთხოვნისა და პასუხის ობიექტების შეცვლა
// შეუძლია მოთხოვნა-პასუხის ციკლის დასრულება
// შეუძლია დასტის შემდეგი შუალედური პროგრამული უზრუნველყოფის გამოძახება
// შეიძლება იყოს აპლიკაციის დონის, როუტერის დონის

// next() express-ში გადადის შემდეგ route-ზე ან middleware-ze


// app.use() გამოიყენება Middleware ფუნქციების გასაშვებად. ის არ არის მიბმული კონკრეტულ HTTP მეთოდთან, არის ზოგადი განსხვავებით დანარჩენებისგან. მაგ: app.get/post