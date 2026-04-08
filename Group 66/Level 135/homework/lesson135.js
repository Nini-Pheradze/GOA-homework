const express = require('express');
const app = express();

// 1. რა არის Middleware?
// ეს არის ფუნქცია, რომელსაც აქვს წვდომა Request (req) და Response (res) ობიექტებთან,
// ასევე შემდეგ middleware ფუნქციაზე (next).

const myMiddleware = (req, res, next) => {
    // აქ შეგვიძლია ჩავწეროთ ნებისმიერი ლოგიკა:
    
    console.log("მოთხოვნა შემოვიდა: " + new Date().toLocaleString());

    // Middleware-ის მთავარი მახასიათებლები:
    // ა) კოდის შესრულება.
    // ბ) ცვლილებების შეტანა req და res ობიექტებში.
    // გ) მოთხოვნა-პასუხის ციკლის დასრულება (მაგ: res.send()).
    // დ) შემდეგი ფუნქციის გამოძახება რიგში.

    next(); // <--- უმნიშვნელოვანესი ნაწილი! 
    // თუ არ გამოვიძახებთ next()-ს, მოთხოვნა "გაიჭედება" და კლიენტი პასუხს ვერ მიიღებს.
};

// Middleware-ის გამოყენება გლობალურად
app.use(myMiddleware);

app.get('/', (req, res) => {
    res.send("მთავარი გვერდი");
});

app.listen(3000);