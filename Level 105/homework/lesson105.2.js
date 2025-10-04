// Create an object with at least 5 key-value pairs and use Object.entries() to list all [key, value] pairs.

const car = {
    mark: "Mercedes-Benz",
    model: 213,
    car: "Mercedes-AMG E 63 S 4MATIC",
    engine: 4.0,
    horsepower: 612
};

console.log(Object.entries(car));

// Write a function that takes an object and prints each key and its value in the format "key: value".

for (const [key, value] of Object.entries(car)) {
    console.log(`${key}: ${value}`);
}

// Convert the entries of an object into a new array where each element is a string "key=value".

function KeyValue(car) {
    return Object.entries(car).map(([key, value]) => `${key} = ${value}`);
};

console.log(KeyValue(car));

// Create a function that filters an object and returns only the entries where the value is greater than 10.

function greaterThan10(car) {
    return Object.entries(car).filter(([key, value]) => value > 10);
};

console.log(greaterThan10(car));

// Write a function that swaps keys and values of an object using Object.entries().

function swaps(car) {
    return Object.entries(car).map(([key, value]) => [value, key]);
}

console.log(swaps(car));