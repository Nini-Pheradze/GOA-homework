// Use pop to remove the last number from an array and log the removed value.

const numbers = [1, 2, 3, 4, 5];

console.log(numbers.pop());

// Use pop to remove the last fruit name from an array of strings.

const fruits = ["grapefruit", "avocado", "banana", "mango"];

console.log(fruits.pop());

console.log(fruits);


// Continuously pop elements from an array until it becomes empty.

const elements = ["computer", "coding", "programmer"];

while (elements.length > 0) {
    console.log(elements.pop());
};

console.log("Now array is empty: ", elements);


// Use pop to remove the last object from an array of users.

const users = [
    {
        user: "Nini", age: 15
    },
    {
        user: "Lali", age: 11
    },
    {
        user: "Elene", age: 10
    },
    {
        user: "Irakli", age: 33
    },
    {
        user: "Ia", age: 35
    }
];

console.log(users.pop());

console.log(users);


// Use pop to remove the last element from an array and store it in another variable.

const arr = ["computer", "coding", "programmer"];

const last = arr.pop();

console.log(last);
