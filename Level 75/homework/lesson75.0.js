// Create a counter that logs numbers from 1 to 5 to the console every second, then stops.

let count0 = 1;
let interval = setInterval(() => {
    console.log(count0);
    count0++;
    if(count0 > 5) clearInterval(interval);
})

let button = document.getElementById('btn1');
button.addEventListener('click', function() {
    clearInterval(interval1);
});

// // Change the background color of a web page every 3 seconds, and stop changing after 5 changes.

let count1 = 1;
let interval1 = setInterval(() => {
    console.log(count1);
    count1++;
    if (count1 > 5) clearInterval(interval1);
}, 3000)

let background = document.getElementById('body');

background.addEventListener('click', function() {
    if (background.style.backgroundColor === "white") {
        background.style.backgroundColor = "lightblue";
    };
});


// Display the current time in the console every second, and stop after 15 seconds.

let count2 = 1;
let interval2 = setInterval(() => {
    console.log(count2);
    count2++;
    if(count2 == 16) {
        clearInterval(interval2)
    } 
}, 500)

// Create a simple timer that counts up in seconds and stops when it reaches 10 seconds.

let count3 = 1;
let interval3 = setInterval(() => {
    console.log(count3);
    count3++;
    if(count3 > 10) {clearInterval(interval3)}
}, 500);

// Make a message display in the console every 2 seconds, and stop it after 10 seconds.

let count4 = 1
let interval4 = setInterval(function() {
    console.log("Hello")
    count4++;
    if (count4 == 11) {
        clearInterval(interval4)
    }
}, 500);
