// Round a positive decimal number down to the nearest integer.

const num0 = 1.2;

console.log(Math.round(num0));

// Round a negative decimal number down to the nearest integer.

const num1 = -1.2;

console.log(Math.round(num1));

// Take an array of decimal numbers and round each element down using Math.floor().

const array = [1.2, 3.5, 4.7, -8.7];

const floor = array.map(num => Math.floor(num));

console.log(floor);

// Calculate the floor of the result of dividing two numbers.

const number1 = 8;

const number2 = 5;

const divided = number1 / number2;

console.log(Math.floor(divided));

// Use Math.floor() to round down a price after applying a discount.

const price = 18.5;

const discount = 15;

const discounted = price - (price * discount / 100);

const final = Math.floor(discounted);

console.log("Final Price: ", final);