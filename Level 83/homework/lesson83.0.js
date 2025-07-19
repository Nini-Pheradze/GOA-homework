// 🔷 Homework 1: Filter Positive Numbers from Array
// Write an arrow function that loops through an array and logs only positive numbers.

// Use if to check if number is positive.

// Use continue to skip negative numbers.

const positiveNums = (numbers) => {
    for (let num of numbers) {
        if (num < 0) {
            continue;
        };
        console.log(num);
    }
};

const nums = [-1, -2, 3, -4, 5, 10, -10];

positiveNums(nums);

// 🔷 Homework 2: Find First Word With More Than 5 Letters
// Use a for loop to go through a list of words.

// If a word has more than 5 letters, print it and break.

// Wrap the code in an arrow function.

const wordLetters = (words) => {
    for (let letter of words) {
        if (letter.length < 5) {
            continue;
        };
        console.log(letter);
    }
};

const word = ["Anna", "Mikheil", "Nini", "Lali", "Elene"];

wordLetters(word);


// 🔷 Homework 3: Sum Numbers Until a Negative Is Found
// Write an arrow function that loops through an array of numbers.

// Use break if a negative number is found.

// Sum only the numbers before that and log the result.

const NegativeNums = (number) => {
    for (let negative of number) {
        if (negative > 0) {
            continue;
        }
        console.log(negative);
    }
};

const numbers = [-1, -2, -3, -4, 5, -5];

NegativeNums(numbers);



// 🔷 Homework 4: Show Numbers Except Multiples of 3
// Arrow function that prints numbers from 1 to 20.

// Skip numbers that are divisible by 3 using continue.

const Multiple = (skip) => {
    for (let nums of skip) {
        if (nums % 3 !== 0) {
            continue;
        }
        console.log(nums);
    }
};

const divisible = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

Multiple(divisible);


// 🔶 Homework 5: Count How Many Words Start with "A"
// Use an arrow function and for loop to count how many words start with "A" or "a".

// Use continue to skip words shorter than 1 character.

// Use if condition to check starting letter.

const wordsWithAora = (letters) => {
    let count = 0;
    for (let letter of letters) {
        if (letter.length < 1) {
            continue;
        }
        if (letter[0] === 'A' || letter[0] === 'a') {
            count++;
        }
        console.log(`Words starting with A or a: ${count}`);
    }
};

const sentence = ("Goal Oriented Academy is the best!");

wordsWithAora(sentence);


// 🔶 Homework 6: Print Numbers Between 1–30 But Skip Multiples of 4 and 6
// Use arrow function and for loop.

// Use continue to skip multiples of 4 and 6.

const arrowFunction = (nums) => {
    for (let num of nums) {
        if (num % 4 === 0 || num % 6 === 0) {
            continue;
        }
        console.log(num);
    }
};

const from1To30 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

arrowFunction(from1To30);



// 🔶 Homework 7: Find First Name Longer Than 8 Characters
// Use arrow function and loop through a list of names.

// Use if and break when name length is greater than 8.

const longName = (name) => {
    for (let char of name) {
        if (char.length < 8) {
            continue;
        }
        console.log(char);
    }
};

const names = ["Elizabeth", "Elene", "Aleqsandre", "Irakli", "Demetre"];

longName(names);


// 🔶 Homework 8: Print Only Odd Numbers From an Array
// Use arrow function and loop.

// Use if and continue to skip even numbers.

const oddNums = (numbers) => {
    for (let nums of numbers) {
        if (nums % 2 === 0) {
            continue;
        }
        console.log(nums);
    }
};

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

oddNums(number);



// 🔶 Homework 9: Sum Only Positive Even Numbers From an Array
// Use arrow function and loop.

// Use if to check if a number is both positive and even.

// Use continue to skip others.


const  SumOnlyPositiveEvenNumbers = (positive) => {
    for (let nums of positive) {
        if (nums % 2 !== 0 || nums < 0) {
            continue;
        }
        console.log(nums);
    }
};

const num= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, -30, -15, -45, -40, -11, -12, -13, -14];

SumOnlyPositiveEvenNumbers(num);