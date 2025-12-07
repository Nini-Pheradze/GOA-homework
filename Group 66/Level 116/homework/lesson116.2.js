// მომხმარებელს შემოატანინეთ სიტყვა, დააბრუნეთ მოცემული ტექსტის შემობრუნებული ვერსია

// fs module process.stdin

const fs = require("fs");

process.stdout.write("Enter a word: ");

let reversedText = (data) => {
    const text = data.toString().trim();

    const reversed = text.split("").reverse().join("");

    console.log(reversed);

    fs.writeFileSync("output.txt", reversed);

    console.log('Saved!');
    process.exit();
};

process.stdin.on('data', reversedText);