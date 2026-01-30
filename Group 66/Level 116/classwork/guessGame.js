// შექმენით guess game, მოიფიქრეთ რაიმე შემთხვევითი რიცხვი, სანამ მომხმარებელი მაგ რიცხვს არ შემოიტანს იქამდე დაუბეჭდეთ რომ არასწორია და სცადოს თავიდან, აგრეთვე დაუბეჭდეთ მერამდენე მცდელობაა მისი, როცა შემოიტანს სწორ რიცხვს გათიშეთ პროგრამა 

let attempts = 0;

process.stdin.on('data', (userInput) => {
    const number = parseInt(userInput.toString());
    attempts++;

    if(number === 5) {
        console.log(`Congratulations! You entered the correct number in ${attempts} attempts.`);
        process.exit();
    } else {
        console.log('Incorrect number, try again.');
    }
});