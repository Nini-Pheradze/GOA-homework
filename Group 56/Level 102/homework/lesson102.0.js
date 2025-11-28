// Generate a random decimal
// Write a function that returns a random decimal between 0 and 1.

function numberS(num){
    return Math.random(num);
}

console.log(numberS(8));

// Write a function rollDice() that returns a number from 1 to 6.

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
};

console.log(rollDice())

// Simulate flipping a coin and return "Heads" or "Tails".

function flipCoin() {
    return Math.random() < 0.5 ? "Heads" : "Tails";
};

console.log(flipCoin());

// Create a function that generates a random 8-character password using letters and numbers.

function password() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let password = "";

    for (let i = 0; i < 8; i++) {
        let index = Math.floor(Math.random() * chars.length);
        password += chars[index];
    }

    return password;
}

console.log(password());

// Generate true or false randomly using Math.random().

function trueOrfalse() {
    return Math.random() ? true : false;
}

console.log(trueOrfalse());