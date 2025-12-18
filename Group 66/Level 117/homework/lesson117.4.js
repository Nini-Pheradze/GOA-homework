// გამოიყენეთ Writeable Streams - იმისათვის, რომ ფაილში შეინახოთ რიცხები 1 - დან 50 - ის ჩათვლით

const fs = require('fs');

const fileStream = fs.createWriteStream('output.txt');

for (let i = 1; i <= 50; i++) {
    fs.WriteStream.write(i + '\n');
}

writeStream.end();

writeStream.on('finish', () => {
    console.log('Numbers from 1 to 50.')
});

writeStream.on('error', (err) => {
    console.log('Error:', err.message);
});