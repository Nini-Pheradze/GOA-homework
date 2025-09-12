// Find the index of the first number in an array that is less than 0.

const numbers = [0, 1, 2, 3, -1, -2, -3];

const finded1 = numbers.findIndex(number => number < 0);

console.log(finded1);


// Find the index of the first string in an array that ends with "ing".

const strings = ["tallish", "coding", "anxious", "writing"];

const finded2 = strings.findIndex(string => string.endsWith("ing"));

console.log(finded2);


// Find the index of the first object in an array of users whose isActive property is true.

const properties = [
    {
        name: "Niki", isActive: false
    },
    {
        name: "Nini", isActive: true
    },
    {
        name: "Nikita", isActive: false
    },
    {
        name: "Nika", isActive: true
    }
];

const finded3 = properties.findIndex(object => object.isActive === true);

console.log(finded3);



// Find the index of the first element in an array of numbers that is a multiple of 10.

const multipleOf10 = [1, 2, 5, 9, 10, 30, 40, 50];

const finded4 = multipleOf10.findIndex(multiple => multiple % 10 === 0);

console.log(finded4);

// Find the index of the first fruit name in an array that has exactly 5 letters.

const fruits = ["Orange", "Grape", "Pomegranate", "Mango"];

const finded5 = fruits.findIndex(fruit => fruit.length === 5);

console.log(finded5)