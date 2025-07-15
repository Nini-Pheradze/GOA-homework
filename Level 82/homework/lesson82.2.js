// Create an arrow function that adds two numbers and returns the result.

const sum = (num1, num2) => {
    console.log(num1 + num2);
};

sum(5, 3);

// Write an arrow function that takes a name and returns a greeting message like "Hello, John!".

const greeting = (name) => {
    console.log("Hello" + "," + " " + name + "!");
};

greeting("NINO");

// Make an arrow function that takes an array of numbers and returns a new array with each number doubled.

const numbers = (arr) => {
    let newArr = [];
    for (num of arr) {
        newArr.push(num*2);
    };
    console.log(newArr);
};

numbers([1, 2, 3, 4, 5]);

// Create an arrow function that checks if a number is even and returns true or false.

const true_or_false = (number) => {
    if (number % 2 === 0) {
        console.log(true);
    } else {
        console.log(false);
    };
};

true_or_false(30);

// Write an arrow function that takes a string and returns its length.

const length = (string) => {
    console.log(string.length);
};

length('Success');