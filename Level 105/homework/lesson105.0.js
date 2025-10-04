// Create an object with at least 5 key-value pairs and use Object.keys() to list all the keys.

const myObj = {
    name: "Nini",
    surname: "Pheradze",
    age: 15,
    isGOAStudent: true,
    hobby: "Swimming"
};

console.log(Object.keys(myObj));

// Count how many keys are in a given object using Object.keys().

// first way
for (let i = 1; i <= Object.keys(myObj).length; i++){
    console.log(i)
}

// second way

let keyCount = Object.keys(myObj).length;

console.log(keyCount);

// Write a function that takes an object and returns an array of its keys in uppercase.

let upperCase = Object.keys(myObj).map(key => key.toUpperCase());
console.log(upperCase);

// Check if a specific key exists in an object by using Object.keys() and array methods.

function Include(myObj, key) {
    return Object.keys(myObj).includes(key);
}
console.log(Include(myObj, "name"));

// Create a nested object and extract only the top-level keys using Object.keys().

const Obj = {
    student:{
        name: "Nini",
        surname: "Pheradze",
        age: 15,
        isGOAStudent: true,
        hobby: "Swimming"
    },

    Country: {
        country: "Georgia"
    }
};


let key = Object.keys(Obj);

console.log(key);
