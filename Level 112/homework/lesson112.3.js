// Sum of Numbers:
// Create a function that uses the rest operator to accept any number of arguments and returns their total sum.

function SumOfNums (...nums) {
    let total = 0;
    for (let num in nums) {
        total += num;
    }

    return total;
}

console.log(SumOfNums(2, 5, 8));

// Extract Remaining Properties:
// Given an object, use the rest operator in destructuring to extract one specific property and store the remaining properties in another object.


const aboutMe = {
    name : "Nini",
    surname : "Pheradze",
    age : 14
};

const {name, ...other} = "Lali";

console.log("Other Details:", other);