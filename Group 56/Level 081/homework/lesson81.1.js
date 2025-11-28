// Use a for...of loop to print each element of an array of numbers.

let array0 = ["Mercedes-Benz", 12, true];

for (let item of array0) {
    if (typeof item === "string") {
        console.log(item);
    } else if (typeof item === "number") {
        console.log(item);
    } else if (typeof item === "boolean") {
        console.log(!item);
    }
};

// Use a for...of loop to print each character of a string.

let string = "PHERADZE";

for (let char of string) {
    console.log(char);
};

// Use a for...of loop to sum all numbers in an array and print the total.

let sum = [1, 2, 3, 4, 5];

let total = 0;

for (let num of sum) {
    total += num;
};

console.log("Sum is: ", total);

// Use a for...of loop to print only the even numbers from an array of numbers.

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let even of numbers) {
    if (even % 2 === 0){
        console.log(even);
    };
};

// Use a for...of loop to print all names from an array of names.

let names = ["Nino", "Lali", "Elene", "Ana", "Mikheil"];

for (let name of names) {
    console.log(name);
};