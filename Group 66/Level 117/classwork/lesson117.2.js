// გამოიყენეთ readline და fs მოდულები, იმისათვის რომ ფაილიდან ინფორმაციის წაკითხვა შეგეძლოთ ოპტიმიზირებულად (შექმენით stream) ახსენით კომენტარებით რა არის stream და რატომ არის მისი გამოყენება უკეთესი და პრაქტიკული

// fs მოდული გამოიყენება ფაილებთან სამუშაოდ
const fs = require('fs');

const readline = require('readline');

// ვქმნით readable stream-ს ფაილიდან
const fileStream = fs.createReadStream('result.txt', {
    encoding: 'utf-8'
});

/*
    readline.createInterface საშუალებას გვაძლევს
    stream წავიკითხოთ ხაზ-ხაზად (line by line),
    რაც განსაკუთრებით ეფექტურია დიდი ფაილებისთვის
*/
const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
});

// ყოველი ხაზის მიღებისას ეს callback შესრულდება
rl.on('line', (line) => {
    console.log('ხაზი ფაილიდან:', line);
});

// როცა ფაილის კითხვა დასრულდება
rl.on('close', () => {
    console.log('ფაილის კითხვა დასრულდა');
});
