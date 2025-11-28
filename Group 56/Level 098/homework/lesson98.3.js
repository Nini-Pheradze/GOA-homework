// Square Numbers
// Given [1, 2, 3, 4], return [1, 4, 9, 16].

const nums = [1, 2, 3, 4];

console.log(nums.map(num => num ** 2));


// Double Numbers
// Multiply each number in an array by 2.

const numbers = [2, 4, 6, 8];

console.log(numbers.map(num => num * 2));


// Uppercase Strings
// Convert all strings in an array to uppercase.

const string = ["nini", "pheradze"];

console.log(string.map(str => str.toUpperCase()));


// Extract Names
// From [{name: "Alice", age: 25}, {name: "Bob", age: 30}], return ["Alice", "Bob"].

const people = [
    {
        name: "Alice", age: 25
    }, 
    {
        name: "Bob", age: 30
    }
];

console.log(people.map(obj => obj.name));


// Add 10 to Numbers
// Add 10 to each number in an array.

const number = [1, 2, 3];

console.log(number.map(num => num + 10));