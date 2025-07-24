// Create an IIFE that prints “Hello, world!” to the console.

(function() {
    console.log("Hello, world!");
}());

// Write an IIFE that calculates the square of a given number.

(function(num) {
    console.log("Square: ", num*num);
}(5));

// Create an IIFE that gets an array of numbers and logs the sum of all elements.

(function(numbers) {
    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }

    console.log("Sum: ", sum);
} ([1, 2, 3, 4, 5]));
