// Round a positive decimal number up to the nearest integer.

const num0 = 0.95;

console.log(Math.ceil(num0));

// Round a negative decimal number up to the nearest integer.

const num1 = -1.5;

console.log(Math.ceil(num1));

// Take an array of decimal numbers and round each element up using Math.ceil().

function decimalNumbers(number) {
    return number.map(num => Math.ceil(num));
};

console.log(decimalNumbers([-2.5, -1.2, 0.5, 1.95, 2.78]));

// Calculate the ceiling of the result of dividing two numbers.

const num2 = 7;

const num3 = 3;

const divided = num2 / num3;

console.log(Math.ceil(divided));

// Use Math.ceil() to round up the result of a price calculation with tax.

function CalculatingTaxPrice(price, taxrate) {
    const total = price + (price * taxrate);
    return Math.ceil(total);
};

console.log(CalculatingTaxPrice(15.78, 0.09));