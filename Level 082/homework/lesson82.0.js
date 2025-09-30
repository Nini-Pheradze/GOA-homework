// Print numbers from 1 to 20, but stop the loop if the number is 13.

for (let i = 1; i < 20; i++) {
    if (i === 13) {
        break;
    };
    console.log(i);
};

// Loop through an array of colors and stop when you find "blue".

let colors = ["red", "green", "yellow", "blue"];

for (let color of colors) {
    if (color === 'blue') {
        break;
    };
    console.log(color);
};

// Count from 1 to 50, but stop when the number is divisible by both 4 and 5.

for (let i = 1; i < 50; i++) {
    if (i % 4 === 0 && i % 5 === 0) {
        break;
    };
    console.log(i);
};

// Print each letter in a word, and stop when the letter is "a".

let sentence = "If you want to learn programming, Goal Oriented Academy is here!";

for (let letter of sentence) {
    if (letter.toLowerCase() === 'a') {
        continue;
    };
    console.log(letter);
};

// Keep adding numbers from 1 upwards, and stop when the total sum reaches 100.

let sum = 0;
let num = 1;

while (sum < 100) {
    sum += num;
    console.log("Added " + num + ", total sum: " + sum);
    num++;
};

