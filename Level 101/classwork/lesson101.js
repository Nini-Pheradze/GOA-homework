// ცვლადში შეინახეთ თქვენი სახელი. თქვენი დავალებაა, რომ სახელი შემოაბრუნოთ.

// Hint - string -> array -> string.

const myName = ["N", "i", "n", "i"];

const myname = "Nini";

console.log(myname.split("").reverse().join(""));

console.log(myName.reverse());


// შექმენით Math.abs მეთოდის manual ფუნქცია.

function myabs(number) {
    if (number < 0) {
        return -number;
    } else {
        return number;
    }
};

console.log(myabs(-5));
console.log(myabs(15));


// Print the result of raising 10 to the powers from 1 to 5.

for(let pow = 1; pow <=5; pow++){
    console.log(Math.pow(10, pow));
};