// 3) კარგად გაიაზრეთ fs module - ი, შექმენით ფაილი სადაც შეინახავთ დიდ ინფორმაციას, გამოიყენეთ Readable stream - იმისათვის, რომ დაითვალოთ ფაილში არსებული ხაზების რაოდენობა


const fs = require('fs');
const readline = require('readline');

const myInterFace = readline.createInterface({
    input: fs.createReadStream('text.txt')
});

myInterFace.on('line', (fileLine) => {
    for (let line of fileLine) {
        if (line === '\n') {
            lineCount++;
        }
    }
});

myInterFace.on("end", () => {
    console.log("Number of lines:", lineCount);
});

myInterFace.on("error", (err) => {
    console.log("Error:", err.message);
});