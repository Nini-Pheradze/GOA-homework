// შექმენით ფუნქცია სახელად sumNumbers. შემოიღეთ sum ცვლადი, რომელსაც გაუტოლებთ თავიდან ნულს და საიტერაციო ცვლადი, რომელსაც გაუტოლებთ ისევ 0-ს. 

// ფუნქციაში აიღეთ ერთი while ციკლი - 0-დან 10-მდე უნდა გქონდეთ იტერაციები. როდესაც საიტერაციო ცვლადი იქნება ლუწი, ის დაუმატეთ sum ცვლადს, ხოლო როცა კენტი იქნება, გამოტოვეთ ეს იტერაცია და არ დაემატოს ეს კენტი რიცხვი sum ცვლადს.

// ციკლში მუშაობისას გამოიყენეთ continue keyword

function sumNumbers() {
let sum = 0;
let i = 0;

while (i <= 10) {
    if (i % 2 !== 0) {
        i++; 
        continue; 
    }
    sum += i;
    i++;
};

console.log("Sum of even numbers:", sum);
};

sumNumbers(); 

// Day of the Week Message

// Write a switch case that takes a number (1–7) and logs the corresponding day of the week (e.g., 1 = "Monday").

let day = 1;

switch(day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tueday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid Number. Enter only from 1 to 7!")
};

// Create an arrow function called isEven that takes a number as input and returns true if the number is even, otherwise false.


const isEven = num => {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
};

console.log(isEven(8));
console.log(isEven(9));
console.log(isEven(10));
console.log(isEven(11));