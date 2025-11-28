// 6. Replace Middle Element:
// Create an array of 3 numbers. Replace the middle number with 0. Log the array.

let array1 = [2, 3, 6];

array1[1] = 0

console.log(array1)


// 7. Add and Remove Elements:
// Create an array with 2 elements. Add one element to the end and one to the beginning. Then remove the last one. Log the final array.

let arr = ['apple', 'banana'];
console.log('Initial array:', arr);


arr.push('cherry');
console.log('After adding to end:', arr);

arr.unshift('orange');
console.log('After adding to beginning:', arr);


arr.pop();
console.log('After removing last element:', arr);

console.log('Final array:', arr);


// 8. Average of Array:
// Create an array of 4 numbers. Calculate and log the average.

let numbers = [10, 20, 30, 40];

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

let average = sum / numbers.length;
console.log('Average:', average);


// 9. Reverse an Array Manually:
// Create an array of 3 elements and manually (not using .reverse()) log the elements in reverse order using indexing.)

let elements = ["morning", "afternoon", "evening"];

console.log(elements[2]);
console.log(elements[1]);
console.log(elements[0]);


