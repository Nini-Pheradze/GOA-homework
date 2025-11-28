// Find the last number in an array that is greater than 100.

const numbers = [2, 3, 4, 500, 600, 700, 100, 9000];

const finded1 = numbers.findLast(number => number > 100);

console.log(finded1);

// Find the last string in an array that contains the letter "e".

const words = ["Apple", "Pear", "Peach", "Grapefruit"];

const finded2 = words.findLast(word => word.includes("e"));

console.log(finded2);

// Find the last object in an array of users whose age is under 25.

const  users = [
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

const finded3 = users.findLast(user => user.age < 25);

console.log(finded3);

// Find the last element in an array of numbers that is odd.

const oddnumber = [1, 3, 5, 7, 9, 2, 4, 6, 8];

const finded4 = oddnumber.findLast(odd => odd % 2 !== 0);

console.log(finded4);

// Find the last word in an array that starts with a vowel.

const startedWithVowel = ["Angle", "Italic", "Saint", "Respect", "Union", "Equivalent"];

const finded5 = startedWithVowel.findLast(word => word.startsWith("A") || word.startsWith("E") || word.startsWith("I") || word.startsWith("O") || word.startsWith("U") || word.startsWith("a") || word.startsWith("e") || word.startsWith("i") || word.startsWith("o") || word.startsWith("u"));

console.log(finded5);