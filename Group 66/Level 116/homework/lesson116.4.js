// მომხმარებელს შემოატანინეთ რაიმე ტექსტი, თქვენი დავალებაა, რომ მოცემული ტექსტი დაამატოთ text.txt - ფაილში, გამოიწვიეთ რაიმე error - მაგალითად არასწორად გადაცით ფაილის სახელი, მოცემული error - ი კი გამიტანეთ console - ში

const fs = require('fs');

process.stdout.write("Enter a word: ");

let appendText = (data) => {
    let input = data.toString().trim();

        const wrongName = 'te!!.txt';

        try{
            fs.writeFileSync(wrongName, input);

            console.log("Text saved!");
        } catch(err) {
            console.log("error");
            console.log(err.message);
        }

        process.exit();
};

process.stdin.on('data', appendText);