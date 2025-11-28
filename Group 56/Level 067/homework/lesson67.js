// Create an empty object.
let object = {
    
};

console.log(object);

// Create an object with your name, age, and city.
let aboutMe = {
    name: "Nini",
    age: 14,
    city: "Tbilisi"
};

console.log(aboutMe);

// Access the value of a property in an object.
let plant = {
    flower: 'Rose',
    fruit: 'Banana',
    vegetable: 'Tomato'
};

console.log(plant.fruit);

// Add a new property to an existing object.
let plant1 = {
    flower: 'Rose',
    fruit: 'Banana'
};

plant1.vegetable = 'Potato';

console.log(plant1);

// Create a nested object (an object inside another object).
let aboutme = {
    name: "Nini",
    surname: "Pheradze",
    age: 14,
    education: {
        Academy: 'GOA',
        School: 'Number 5 Public School',
    }
};

console.log(aboutme);

// Change the value of an existing property in an object.

let Georgia = {
    population: "Three Million",
    capitalCity: "Tbilisi",
};

Georgia.population = "Four Million";

console.log(Georgia);


// Check if two numbers are both greater than 10.
let num1 = 15;
let num2 = 20;

if (num1 > 10 && num2 > 10) {
    console.log("Both are greater than 10.")
} else {
    console.log("10 is greater!")
}

// Check if at least one of two conditions is true.
let a = 15;
let b = 20;

if (a > 10 || b > 10) {
    console.log("At least one number is greater than 10.");
} else{
    console.log("None is greater than 10.")
};

// Use the NOT operator to invert a boolean value.
let ispossible = true;

if (ispossible) {
    console.log("Not Possible!")
} else{
    console.log("Possible")
};

// Combine multiple logical operations in a single expression.

let x = 20;
let y = true;
let n = false;

if ((x >= 20 && y) && !n) {
    console.log("Access granted!")
} else{
    console.log("Access not granted!")
};


// Convert a number to a string using String().
let number0 = 10;
let str0 = String(number0);

console.log(str0);
console.log(typeof str0);

// Convert a boolean value to a string using String().
let boolean0 = true;
let str1 = String(boolean0);

console.log(str1);
console.log(typeof str1);

// Convert a string containing a number to a number using Number().
let numstr = Nini08;
let str2 = Number(numstr);

console.log(str2);
console.log(typeof str2);

// Use Number() to convert a boolean to a number.
let boolean1 = false;
let boolean2 = true;

console.log(Number(boolean1));
console.log(Number(boolean2));

// Check what happens when you use Number() on a non-numeric string.
let text = "Here I am!";
let str4 = Number(text);

console.log(str4);
console.log(typeof str4);
