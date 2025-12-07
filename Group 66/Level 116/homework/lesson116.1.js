// მომხმარებელმა უნდა გამოიცნოს თქვენს მიერ ჩაფიქრებული რიცხვი, თუ მომხმარებელმა შემოიტანა ისეთი რიცხვი რომელიც ჩაფიქრებულ რიცხვზე დიდია გამოიტანეთ ტექსტი 'Too high!' თუ რიცხვი ჩაფიქრებულ რიცხვზე ნაკლებია გამოიტანეთ ტექსტი 'Too Low!' სხვა შემთხვევაში კი გამოიტანეთ ტექსტი 'Correct!' და გათიშეთ პროგრამაz

const myNumber = 7;
process.stdout.write("Guess a number: ");

let playGame = (data) => {
    const number = Number(data.toString().trim());

    if (isNaN(number)) {
        console.log("Please enter only number!");
        process.stdout.write("Guess: ");
        return;
    }

    if (number > myNumber) {
        console.log('Too high!');
    } else if (number < myNumber) {
        console.log("Too low!");
    } else {
        console.log("Correct!");
    }
};

process.stdin.on('data', playGame);