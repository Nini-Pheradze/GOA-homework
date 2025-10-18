// Print numbers from 1 to 5.

// Use a while loop to print numbers from 1 to 5, each on a new line.

let n = 1

while (n <= 5) {
    console.log(n);
    n ++;
}


// Print even numbers from 2 to 10.

// Use a while loop to print even numbers starting from 2 up to 10.

let i = 2

while (i <= 10) {
    console.log(i);
    i += 2;
}


// Print numbers from 10 down to 1.

// Use a while loop to print numbers in reverse from 10 down to 1.

let x = 10

while (x >= 1) {
    console.log(x);
    x -= 1;
}


// Print all even numbers between 1 and 20.

// Use a for loop to check and print even numbers from 1 to 20.

for  (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}

// Print the sum of numbers from 1 to 5.

// Use a for loop to add numbers from 1 to 5 and print the final sum.
let sum = 0;

for  (let y = 1; y <= 5; y ++) {
    sum += y;
}

console.log("Sum from 1 to 5 is:", sum);
