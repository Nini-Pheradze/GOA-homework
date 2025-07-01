// 4. Random Number Logger:
// Log a random number between 1 and 10 every 1.5 seconds. Stop it after 5 numbers are logged.

let count3 = 0;

let interval4 = setInterval(() => {
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    console.log(randomNumber);
    count3++;

    if (count3 === 5) {
        clearInterval(interval4);
    };
}, 1500);