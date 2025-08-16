// Prompt the user for two values. Use isNaN() to test each one and display whether they are numbers or not. log "Is number" if result is false, else log "Is not a number

let value1 = prompt("Enter the first value:");
let value2 = prompt("Enter the second value:");

if (isNaN(value1) === false) {
    console.log("First value: Is number");
} else {
    console.log("First value: Is not a number");
};

if (isNaN(value2) === false) {
    console.log("Second value is number");
} else{
    console.log("Second value is not number.");
};


// Ask the user to enter two decimal numbers as strings (e.g., "12.5" and "7.9").

// 1. Convert both with parseInt() and add them.

// 2. Convert both with parseFloat() and add them.

// 3. Compare the two sums, use === operator.

let num1 = prompt("Enter the first decimal number:");
let num2 = prompt("Enter the second decimal number:");

let sumofint = parseInt(num1) + parseInt(num2);
console.log("Sum (int): ", sumofint);

let sumoffloat = parseFloat(num1) + parseFloat(num2);
console.log("Sum (float): ", sumoffloat);

if (sumofint=== sumoffloat) {
    console.log("The sums are equal (===).");
} else {
    console.log("The sums are  equal (===).");
}



// Ask the user to enter a math expression as a string (e.g., "12.5 + 7.3 * 2").

// 1. Use eval() to calculate the result of the expression.

// 2. Use parseInt() on the result to show the integer part.

// 3. Use parseFloat() on the result to show the full decimal value.


// 4. Display all four:
// Original expression
// Evaluated result
// Integer conversion
// Float conversion

let expression = prompt("Enter a math expression:");

let result1 = eval(expression);

let result2 = parseInt(expression);

let result3 = parseFloat(expression);

console.log("Original expression:", expression);
console.log("Evaluated result:", result1);
console.log("Integer conversion:", result2);
console.log("Float conversion:", result3);

