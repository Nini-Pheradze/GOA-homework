// Print Elements
// Print each element of an array to the console.

const elements = ["George", "David", "Irakli"];

elements.forEach(el => console.log(el));


// Print with Index
// Print each element along with its index, e.g., "Index: 0, Value: 10".

const nums = [1, 2, 3, 4, 5];

nums.forEach((num, i) => console.log(`Value: ${num}, Index: ${i}`));


// Sum of Numbers
// Calculate and print the sum of all numbers in an array.

function sumOfNums(array) {
    let sum = 0;
    array.forEach(num => {
        sum += num;
    });
    console.log(sum)
};

sumOfNums([1, 2, 3, 4, 5]);

// Uppercase Strings
// Print each string in uppercase.

const strings = ["nini", "pheradze"];

strings.forEach(str => console.log(str.toUpperCase()));


// Extract Names from Objects
// Given [{name: "Alice"}, {name: "Bob"}], print each name.

const names = [
    {
        name: "Alice"
    }, 
    {
        name: "Bob"
    }
];

names.forEach(obj => console.log(obj.name));