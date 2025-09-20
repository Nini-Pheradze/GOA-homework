// Create a Date object and log only its month.

let month = new Date();

let Month = month.getMonth();

console.log(Month);

// Write a function that returns the month of a given Date object.

function getMonth(date) {
    return date.getMonth();
}

let birthday = new Date(2025, 6, 15, 12, 30, 45); 

console.log("Month of birthday:", getMonth(birthday));

// Compare the months of two different Date objects.

let date1 = new Date(2025, 6, 15, 12, 30, 45); 
let date2 = new Date(2025, 6, 15, 14, 15, 50);

let month1 = getMonth(date1);
let month2 = getMonth(date2);

if (month1 > month2) {
    console.log("Date1 has bigger month.");
} else if (month2 > month1) {
    console.log("Date2 has bigger month.");
} else {
    console.log("Both dates have the same month.");
}

console.log("Date1 month:", month1);
console.log("Date2 month:", month2);

// Print the current month every 5 seconds using setInterval().

let counter = 0;

const Counter = setInterval(() => {
    console.log(`${counter}`);
    counter++;
}, 1000);

const monthOnly = setInterval(() => {
    const seconds = new Date().getMonth().toString().padStart(2, '0');
    console.log(`month: ${seconds}`)
}, 1000);

setTimeout(() => {
    clearInterval(printCounter);
    console.log("Counter stopped after 10 month");
}, 5000);