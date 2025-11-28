// Print numbers from 1 to 20, but skip (don’t print) the number 13.

for (let i = 1; i <= 20; i++) {
    if (i === 13) {
        continue;
    };
    console.log(i);
};

// Loop through an array of fruits and skip printing "banana".

let fruits = ["apple", "strawberry", "banana", "pear"];

for (let fruit of fruits) {
    if (fruit === 'banana') {
        continue;
    };
    console.log(fruits);
};

// Count from 1 to 30, but skip numbers that are divisible by 3.

for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0) {
        continue;
    };
    console.log(i)
};

// Print each letter in a word, but skip the letter "e".

let word = "extreme";

for (let e of word) {
    if (e === 'e') {
        continue;
    };
    console.log(e);
};

// Loop through numbers from 1 to 50, and skip all even numbers.

for (let i = 1; i < 50; i++) {
    if (i % 2 === 0) {
        continue;
    };
    console.log(i);
};

