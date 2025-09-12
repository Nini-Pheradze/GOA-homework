// Find the index of the number 25 in an array of numbers.

const numbers = [1, 2, 3, 4, 25, 5, 6, 7, 8, 9, 10];

const finded1 = numbers.findIndex(number => number === 25);

console.log(finded1);


// Find the index of the string "apple" in an array of fruits.

const fruits = ["apple", "Watermelon"];

const finded2 = fruits.indexOf("apple");

console.log(finded2);

// Find the index of the first occurrence of "a" in an array of letters.

const letters = ["a", "b", "c"];

const finded3 = letters.findIndex(letter => letter == "a");

console.log(finded3);


// Find the index of the element "cat" in an array of animals.

const animals = ["dog", "elephant", "Squarrel", "cat"];

const finded4 = animals.findIndex(animal => animal === "cat");

console.log(finded4);


// Find the index of the number 100 in an array (where it may not exist).

const nums = [0, 1, 2, 3, 4];

const finded5 = nums.indexOf(100);

console.log(finded5);