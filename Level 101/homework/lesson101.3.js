// Find the absolute value of a positive number.

const num0 = 2;

console.log(Math.abs(num0));

// Find the absolute value of a negative number.

const num1 = -2;

console.log(Math.abs(num1));

// Take an array of numbers and convert each element into its absolute value.

function absoluteNums(array) {
    return array.map(num => Math.abs(num));
};

console.log(absoluteNums([-2, -1, 0, 1, 2]));

// Subtract two numbers and use Math.abs() to ensure the result is always positive.

function SubtractOfNums(a, b) {
    return Math.abs(a - b);
};

console.log(SubtractOfNums(3, 2))

// Given a number, use Math.abs() to check its distance from zero.

function distanceFromZero(num) {
    return Math.abs(num);
};

console.log(distanceFromZero(-11));
console.log(distanceFromZero(34));
console.log(distanceFromZero(12));