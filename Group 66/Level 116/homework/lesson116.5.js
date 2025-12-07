// შეამოწმეთ არსებობს თუ არა ფაილი, ფაილის სახელი არის text1.txt - თუ მოცემული ფაილი არსებობს დაბეჭდეთ File found, თუ არა დაბეჭდეთ File missing ამისათვის გამოიყენეთ existsSync

const fs = require("fs");

const fileName = "text1.txt";

if(fs.existsSync(fileName)) {
    console.log("File Found!");
} else {
    console.log("File missing")
}