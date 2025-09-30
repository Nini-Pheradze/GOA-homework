// Positive Number Check
// Check if an array contains any positive numbers.

const numbers = [-5, -4, -3, -2, -1, 0];

console.log(numbers.some(num => num > 0));


// Even Number Check
// Determine if the array contains at least one even number.

const numarray = [1, 2, 3, 4, 5];

console.log(numarray.some(num => num % 2 == 0));


// String Length Check
// Check if any string in an array has more than 5 characters.

const length = ["Nini", "Pheradze"];

console.log(length.some(el => el.length > 5));


// Falsy Value Detection
// Determine if any element is falsy (0, false, null, undefined, "", NaN).

const falsy = ["hello", 1, true];

falsy.some(el => !el);

console.log(falsy);

// Prime Number Detection
// Check if any number in an array is prime.

function primeNumber(arr) {
    return arr.some(num => {
    if (num < 2) return false;
    for (let i = 2; i < num; i++) { 
        if (num % i === 0) return false;
    }
    return true;
    });
};

console.log(primeNumber([2, 4, 1, 3]));
