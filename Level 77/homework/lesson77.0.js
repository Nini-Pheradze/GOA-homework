// 1. Countdown Timer:
// Create a countdown from 10 to 0 using setInterval. Log each number every second. When it reaches 0, stop the interval and log "Time's up!".

let count0 = 10;
let interval0 = setInterval(() => {
    console.log(count0);
    count0--;
    if (count0 < 0) {
        clearInterval(interval0);
        console.log("Time is up!");
    }
}, 1000);

// 10. Loop with Index:
// Create an array of any 5 elements. Use a for loop to log each value and its index like this:

// python-repl
// Copy
// Edit
// Index 0: apple  
// Index 1: banana ...