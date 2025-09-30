// From an array of 10 strings, determine if any string has more than 10 characters.

const arr = ["Nini", "Pheradze", "Takaishvili", "Qartvelishvili"];

console.log(arr.some(str => str.length > 10));


// Print each element of 5 Numbers array along with its index:
// "Index: X, Value: Y"

const nums = [1, 2, 3, 4, 50, 500, 1000];

nums.forEach((el, i) => {
    console.log(`Index: ${i}, Value: ${el}`)
});


// Uppercase Strings
// Convert all strings in an array to uppercase.

const strings = ["apple", "pear"];

console.log(strings.map(str => str.toUpperCase()));

