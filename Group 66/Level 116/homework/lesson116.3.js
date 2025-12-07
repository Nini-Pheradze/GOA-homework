// მომხმარებელს შემოატანინეთ ტექსტი, თუ მომხმარებელმა შემოიტანა მნიშვნელობა add Text, მაშინ დაამატეთ სიტყვა text.txt ფაილშ, თუ მომხმარებელმა შემოიტანა მნიშვნელობა show მაშინ გამოიტანეთ text.txt ფაილის შეგთავსი, თუ შემოიტანა მნიშვნელობა clear მაშინ text.txt ფაილში ავტომატურად უნდა წაიშალოს მასში არსებული შიგთავსი, თუ მან შემოიტანა მნიშვნელობა exit მაშინ გათიშეთ თქვენი პროგრამა

const fs = require('fs');

process.stdout.write("Enter a text: ");

let userTexts = (data) => {
    let given = data.toString().trim();

    if (given === "exit") {
        console.log("Program terminated.");
        process.exit();
    }

    if (given.startsWith('add Text')) {
        const textToAdd = input.slice(4);
        fs.writeFileSync('text.txt', 'word');
        console.log("Text added!");
    } else if (given === 'show') 
        {try {
            const content = fs.readFileSync("text.txt", "utf8");
            console.log("File content:");
            console.log(content || "(empty)");
        } catch (err) {
            console.log("File does not exist or is empty.");
        }
    } else if (given === "clear") {
        fs.writeFileSync("text.txt", "");
        console.log("File cleared.");
    }
}

process.stdin.on('data', userTexts);