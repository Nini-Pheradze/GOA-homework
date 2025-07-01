// 2. Flashing Title:
// Change the document.title between "Hello" and "Goodbye" every 1 second. After 6 seconds, stop the interval.

let hello = true;
let count1 = 0;

let interval1 = setInterval(() => {
    document.title = hello ? "Hello" : "Goodbye";

    hello =! hello;

    count1++;

    if(count1 ===6) {
        clearInterval(interval1);
    }
}, 1000);