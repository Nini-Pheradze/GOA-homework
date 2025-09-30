// Find the last index of the number 10 in an array of numbers.

const numbers = [1, 2, 3, 4, 5, 6, 10, 30, 40, 50, 10, 20, 70];

const finded1 = numbers.findLastIndex(number => number === 10);

console.log(finded1);


// Find the last index of the string "apple" in an array of fruits.

const fruits = ["apple", "mango", "peach", "apple", "banana"];

const finded2 = fruits.findLastIndex(fruit => fruit === "apple");

console.log(finded2);


// Find the last index of the letter "a" in an array of characters.

const letters = ["a", "b", "c", "a"];

const finded3 = letters.findLastIndex(letter => letter === "a");

console.log(finded3);


// Find the last index of "dog" in an array of animals.

const animals = ["cat", "dog", "zebra", "crocodile", "elephant", "dog", "squarrel"];

const finded4 = animals.findLastIndex(animal => animal === "dog");

console.log(finded4);


// Find the last index of the number 0 in an array containing positive and negative numbers.

const nums = [-4, -3, -2, -1, 0, 1, 2, 3, 4];

const finded5 = nums.findLastIndex(num => num === 0);

console.log(finded5);