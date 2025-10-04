// Create an object with at least 5 key-value pairs and use Object.values() to list all the values.

const myObj = {
    name: "Nini",
    surname: "Pheradze",
    age: 15,
    isGOAStudent: true,
    hobby: "Swimming"
};

console.log(Object.values(myObj));

// Count how many values are in a given object using Object.values().

let count = Object.values(myObj).length;

console.log(count);

// Write a function that takes an object and returns an array of its numeric values only.

function numericValues(myObj) {
    return Object.values(myObj).filter(value => typeof value === "number");
};

console.log(numericValues(myObj));

// Find the sum of all numeric values in an object using Object.values().

function SumOfNUmeric(myObj) {
    return Object.values(myObj).filter(value => typeof value === "number").reduce((sum, num) => sum + num, 0);
};

console.log(SumOfNUmeric(myObj));

// Check if a certain value exists in an object by using Object.values() and array methods.

function ifExists(myObj, value) {
    return Object.values(myObj).includes(value)
}

console.log(ifExists(myObj, "surname"));
c=console.log(ifExists(myObj, "Pheradze"));
