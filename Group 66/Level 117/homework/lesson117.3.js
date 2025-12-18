// 4) შექმენით ფაილი, შეინახეთ მასში დიდი ინფორმაცია, თქვენი დავალებაა, რომ გათიშოთ პროგრამა მაშინ როდესაც ფაილში არსებული ხაზების რაოდენობა გაუტოლდება 10

const fs = require('fs');
const { stream } = require('undici-types');


const readLinetext = Readline.createInterFace({
    input: fs.createReadStream('tenline.txt')
});

readLinetext.on('line', (fineLine) => {
    for (line of fineLine) {
        if (line === '\n') {
            Count ++;

            if (Count === 10) {
                console.log('Programm Stopped');
                stream.destroy();
                process.exit();
            }
        }
    }
});

stream.on('error', (err) => {
    console.log('Error:', err.message);
});
