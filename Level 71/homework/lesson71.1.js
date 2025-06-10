// Homework 6: Array Includes Check
// Task:
// Create an array of your 5 favorite movies.
// Ask the user to type a movie name (using prompt()), and check if it's in your favorites list using .includes()

// Show a message: "Yes, it's one of my favorites!" or "No, I don't like that one much."

let myMovies = ["The Godfather", "Interstellar", "The Matrix", "Titanic", "The Princess Diaries"]

let user = prompt("Enter which film do you like the most: ")

if (user.includes(myMovies)) {
    alert("Yes, it's one of my favorites!");
} else {
    alert("No, I don't like that one much.");
}


// Homework 7: Join and Sort
// Task:
// Create an array of random words like:

// js
// Copy
// Edit
// let words = ["banana", "apple", "pear", "orange"];
// Sort the array alphabetically.

// Join the array into a string with commas.

// Output: "apple, banana, orange, pear"

let words = ["banana", "apple", "pear", "orange"];

words.sort();
console.log(words);

let userWord = prompt("Enter a fruit name: ");
if (words.includes(userWord.toLowerCase())) {
    alert("Yes, it is.")
} else {
    alert("No, it isn't.")
}


// Homework 1: Random Number Generator
// Task:
// Write a function that returns a random number between 1 and 10 (inclusive).
// Hint: Use Math.random() and Math.floor().|

function numberGenerator() {
    return Math.floor(Math.random()* 10) + 1;
}

console.log(numberGenerator())


//  Homework 2: Round a Number
// Task:
// Ask the user to input a decimal number (use prompt()).

// Show the number:

// Rounded down (Math.floor)

// Rounded up (Math.ceil)

// Rounded to nearest integer (Math.round)

let userinput = prompt("Enter a decimal number: ");

console.log("Original Number: ", userinput);

console.log("Rounded Down Number: ", Math.floor(userinput));

console.log("Rounded Up Number: ", Math.ceil(userinput));

console.log("Rounded to nearest: ", Math.round(userinput));



// Homework 3: Find the Maximum and Minimum
// Task:
// Create an array of 5 numbers.
// Use Math.max() and Math.min() to:

// Find the largest number

let numArray = [5, 10, 15, 20, 25]

let max = Math.max(...numArray);

let min = Math.min(...numArray);

console.log("MAXIMUM: ", max);
console.log("MINIMUM: ", min);