// Merge Arrays:
// Use the spread operator to merge two arrays (e.g., arr1 and arr2) into a single new array.

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [10, 11, 12, 13, 14, 15];

console.log(...arr1, ...arr2);

// Copy and Modify an Object:
// Create a copy of an existing object using the spread operator, then modify one of its properties in the copied object without affecting the original.

const aboutMe = {
    name : "Nini",
    surname : "Pheradze",
    age : 14
};

let modified = {...aboutMe, age: 15};

console.log(modified);

