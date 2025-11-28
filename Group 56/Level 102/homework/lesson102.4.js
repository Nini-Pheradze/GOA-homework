// Create a Date object and log only its seconds.

let now = new Date();

let second = now.getSeconds();

console.log(second);

// Write a function that returns the seconds of a given Date object.

function getSeconds(date) {
    return date.getSeconds();
}

let birthday = new Date(2025, 6, 15, 12, 30, 45); 

console.log("Seconds of birthday:", getSeconds(birthday));

// Compare the seconds of two different Date objects.

let date1 = new Date(2025, 6, 15, 12, 30, 45); 
let date2 = new Date(2025, 6, 15, 14, 15, 50);

let seconds1 = getSeconds(date1);
let seconds2 = getSeconds(date2);

if (seconds1 > seconds2) {
    console.log("Date1 has bigger seconds.");
} else if (seconds2 > seconds1) {
    console.log("Date2 has bigger seconds.");
} else {
    console.log("Both dates have the same seconds.");
}

console.log("Date1 seconds:", seconds1);
console.log("Date2 seconds:", seconds2);

// Print the seconds every second using setInterval().

let counter = 0;

const Counter = setInterval(() => {
    console.log(`${counter}`);
    counter++;
}, 1000);

const SecondsOnly = setInterval(() => {
    const seconds = new Date().getSeconds().toString().padStart(2, '0');
    console.log(`Seconds: ${seconds}`)
}, 1000);

setTimeout(() => {
    clearInterval(printCounter);
    console.log("Counter stopped after 10 seconds");
}, 10000);