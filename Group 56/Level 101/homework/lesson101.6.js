// Round a positive decimal number to the nearest integer.

const int0 = 2.4;

console.log(Math.round(int0));

// Round a negative decimal number to the nearest integer.

const int1 = -1.2;

console.log(Math.round(int1));

// Take an array of decimal numbers and round each element to the nearest integer.

const array = [2.3, 4.5, 7.8, 9.2];

const rounded = array.map(num => Math.round(num));

console.log(rounded);

// Round the result of dividing two numbers to the nearest integer.

const num1 = 45;

const num2 = 10;

const divided = num1 / num2;

console.log(Math.round(divided));

// Use Math.round() to round a price after adding tax.

function CalculatingTaxPrice(price, taxrate) {
    const total = price + (price * taxrate);
    return Math.round(total);
};

console.log(CalculatingTaxPrice(15.78, 0.09));