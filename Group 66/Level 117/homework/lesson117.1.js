// 2) შექმენით text.txt ფაილი სადაც შეინახავთ სახელებს, თქვენი დავალებაა, რომ დაბეჭდოთ მხოლოდ იმ ფაილის ხაზები რომელებიც უდრის თქვენს სახელს

const fs = require('fs');

const myName = 'Nini';

fs.readFile('text.txt', 'utf8', (err, data) => {
    if (err) {
        console.log('Error reading file!');
        return;
    }

    const lines = data.split("\n");

    lines.forEach(line => {
        if (line.trim() === myName) {
            console.log(line);
        }
    });
});
