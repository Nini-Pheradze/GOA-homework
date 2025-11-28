// Find the smallest of two numbers.

console.log(Math.min(1, 2));

// Find the smallest of three numbers.

console.log(Math.min(10, 23, 34));

// Store a few numbers in an array and use manual function to find the minimum.

function minNum(array) {
    return Math.min(...array);
}

console.log(minNum([-1, 0, 1]));

// Find the smallest number in an array of positive numbers.

console.log(Math.min(76, 56, 36, 16));

// Find the smallest number in an array that contains both positive and negative numbers.

console.log(Math.min(-5, -4, -3, -2, -1, 76, 56, 36, 16));