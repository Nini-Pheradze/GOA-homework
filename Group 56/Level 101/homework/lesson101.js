// Calculate 2 raised to the power of 3.

console.log(Math.pow(2, 3));

// Calculate 5 raised to the power of 0.5 (square root).

console.log(Math.pow(5, 0.5));

// Use Math.pow() to calculate the cube of a number.

function powerOfNum(num) {
    return Math.pow(num, 3);
}

console.log(powerOfNum(5))

// Raise a number from a variable to a given exponent.

const base = 5;

const exponent = 4;

console.log(Math.pow(base, exponent));


// Create an array of numbers and calculate each number raised to the power of 2.

const array = [3, 4, 5, 6, 7, 8];

const square = array.map(num => Math.pow(num, 2));

console.log(square);

// Use Math.trunc() to remove the decimal part of 12.987.

console.log(Math.trunc(12.987));

// Apply Math.trunc() to -45.67 and see the result. Compare it with Math.floor().

console.log(Math.trunc(-45.67));

// Both of them rounds down
