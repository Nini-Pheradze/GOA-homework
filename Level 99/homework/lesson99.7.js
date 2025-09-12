// Use splice to remove the first 2 elements from an array.

const  months = ["March", "April", "May"];

months.splice(0, 2);

console.log(months);


// Use splice to insert "orange" and "grape" into an array at index 2.

const fruits = ["apple", "pear", "peach"];

fruits.splice(2, 0, "orange", "grape");

console.log(fruits);


// Use splice to replace the element at index 3 with "mango".

const elements = ["banana", "orange", "pear", ""];

elements.splice(3, 1, "mango");

console.log(elements);


// Use splice to remove the last 3 elements of an array.

const arr = [1, 2, 3, 4];

arr.splice(-3);

console.log(arr);


// Use splice to insert a number into the middle of an array without deleting anything.

const array = [0, 1, 3, 4];

let newnum = 2;

array.splice(2, 0, newnum);

console.log(array);