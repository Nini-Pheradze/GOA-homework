// Create a function that takes a sentence string and returns the total number of words. Make sure to remove extra spaces at the beginning, end, and between words before counting.

const cw = sentence => sentence.trim().split(" ").length;

console.log(cw("           Nini Pheradze       "))


// Verify that all elements in an array are strings.

console.log([1, 2, 3, 4, "Nini", "Lalo", "Helen"]).every(el => typeof el === "string");

console.log(["1", "Nini", "Pheradze", ""]).every(el => typeof el === "string");


// Given an array of objects with status property, verify that all items have status: "active".

const arr1 = [
    {
        status: "active"
    },
    {
        status: "active"
    },
    {
        status: "active"
    },
    {
        status: "active"
    }
]

console.log(arr1.every(obj => obj.status === "active"));