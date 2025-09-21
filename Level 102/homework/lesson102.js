// 🎲 Random Quote Generator Website
// 🔹 Features

// Displays a random quote each time the user clicks a button.

// Uses Math.random() to pick a random quote from an array.

// Optionally: change background colors randomly when showing a new quote.

function handleQuote() {
    const quotes = [
        ["Set big goals and don't stop while you achieve", 'red'],
        ["Start from where you are, use what you have, do what you can", 'blue']
    ];

    const quotesLength = quotes.length;
    const randomQuote = quotes[Math.floor(Math.random() * quotesLength)];

    document.body.style.background = randomQuote[1];
    alert(randomQuote[0]);
};