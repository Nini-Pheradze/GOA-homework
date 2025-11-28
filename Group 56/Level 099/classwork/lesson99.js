// From an array of product objects {name, price}, filter products whose price is less than 100.

const products = [
    { name: "Book", price: 50 },
    { name: "Pen", price: 3 },
];

const filtered = products.filter(product => product.price < 100);

console.log(filtered);


// From an array of words, find the first word that starts with "b".

const words = ["Boston", "New York", "Chicago", "London", "Dublin", "Berlin"];

const firstB = words.find(word => word.startsWith("b")); 

console.log(firstB);

// Given an array of numbers, insert the number 99 at index 2 without removing anything.

const numbers = [11, 22, 44, 66, 88];

numbers.splice(2, 0, 99);

console.log(numbers);
