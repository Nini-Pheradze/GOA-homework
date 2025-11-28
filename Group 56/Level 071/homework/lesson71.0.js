// Homework 1: Array Basics

// Task:

// Create an array named fruits that contains at least 5 fruits.

let fruits = new Array("Apple", "Pear", "Cherry", "Pomegranate");

// Print the first and last fruit.
console.log(fruits[0], fruits[3]);

// Print the total number of fruits.
console.log(fruits.length);


// Homework 2: Modifying Arrays
// Task:
// Start with this array:

// js
// Copy
// Edit
// let colors = ["red", "green", "blue"];
// Add "yellow" to the end.

// Remove the first color.

// Add "purple" to the beginning.

// Print the final array.

let colors = ["red", "green", "blue"];

colors.push("yellow");

colors.shift();

colors.unshift("purple");

console.log(colors)


// Homework 3: Loop Through an Array
// Task:
// Create an array of numbers.

// Use a for loop to print each number doubled.
// Example: If arr = [2, 3, 4], output: 4, 6, 8

let arr = [2, 3, 4];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i] * 2)
}

// Write a function sumArray(arr) that takes an array of numbers and returns the sum of all numbers.
// Example: sumArray([1, 2, 3]) should return 6.

function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum
}

console.log(sumArray([2, 4, 6]))


// Homework 5: Find the Largest Number
// Task:
// Write a function that takes an array of numbers and returns the largest one.
// Bonus: Don’t use Math.max() — use a loop.

function largestNum(array){
    if (array.length === 0) {
        return undefined;
    }

    let large = array[0]

    for (let i = 0; i < array.length; i++) {
        if (array[i] > large) {
            large = array[i];
        }
    }

    return large;
}

console.log(largestNum([7, 9, 10, 345, 5555]))
