// Find the largest of two numbers.

console.log(Math.max(1, 7));

// Find the largest of three numbers.

console.log(Math.max(1, 7, 88));

// Store a few numbers in an array and use manual function to find the maximum.

function maxNum(array) {
    return Math.max(...array)
}

console.log(maxNum([5, 10, 15]));

// Find the largest number in an array of positive numbers.

console.log(Math.max(1, 2, 3, 4, 56));

// Find the largest number in an array that contains both positive and negative numbers.

console.log(Math.max(-3, -2, -1, 0, 1, 2, 3));