// Print numbers from 1 to 5 using a do...while loop.

let i = 1;

do{
    console.log(i);
    i++;
}
while (i <= 5);


// Print even numbers from 2 to 10 using a do...while loop.

let y = 2;

do {
    console.log(y);
    y += 2;
}
while(y <= 10);


// Print the numbers from 10 down to 1 using a do...while loop.

let x = 10;

do {
    console.log(x);
    x--;
}
while (x >= 1);

// Ask the user to enter a number until they enter a number greater than 100.

// let total = 0;

// do {
//     let user = Number(prompt('Enter Number: '));

//     if (isNaN(num)) {
//         total += user;
//     } else {
//         alert('Enter Another!');
//     }
// }
// while (total <= 100)

// Sum numbers from 1 to 10 and print the total using a do...while loop.

let n = 1;

let sum = 0;

do {
    sum += n;
    n++;
} while (n <= 10);

console.log("Total sum:", sum);
