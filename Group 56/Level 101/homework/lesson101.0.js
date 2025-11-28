// Take an array of numbers and reverse the order of its elements.

const numbers = [1, 2, 3, 4];

console.log(numbers.reverse());

// Take an array of fruits and reverse it, then print the first element.

const fruits = ["apple", "pear", "orange"];

fruits.reverse();

console.log(fruits[0]);

// Reverse an array of characters to form a word (e.g., ["o","l","l","e","h"] → "hello").

function reversedWord(word) {
    return word.reverse().join("");
};

console.log(reversedWord(["W", "o", "r", "l", "d"]));

// Reverse an array of numbers and find the maximum value.

const number = [1, 3, 5, 7];

console.log(number.reverse());

console.log(Math.max(...number));

// Reverse an array and join the elements into a string separated by commas.

const array = ["coding", "programmer", "web development"];

console.log(array.reverse().join(","));