// Find the index of the last number in an array that is greater than 50.

const numbers = [2, 3, 4, 50, 78, 88, 33, 1];

const finded1 = numbers.findLastIndex(number => number > 50);

console.log(finded1);


// Find the index of the last string in an array that starts with "S".

const words = ["Saint", "Sacrifice", "suficient", "efficient"];

const finded2 = words.findLastIndex(word => word.startsWith("S"));

console.log(finded2);


// Find the index of the last object in an array of users whose isActive property is true.

const users = [
    {
        name: "Niki", isActive: false
    },
    {
        name: "Nini", isActive: true
    },
    {
        name: "Nikita", isActive: false
    },
    {
        name: "Nika", isActive: true
    }
];

const finded3 = users.findLastIndex(user => user.isActive === true);

console.log(finded3);


// Find the index of the last element in an array of numbers that is divisible by 3.

const odds = [1, 3, 5, 7, 9];

const finded4 = odds.findLastIndex(odd => odd % 3 === 0);

console.log(finded4);


// Find the index of the last word in an array that has exactly 4 letters.

const fourletterWords = ["page", "doll", "site"];

const finded5 = fourletterWords.findLastIndex(letter => letter.length === 4);

console.log(finded5);
