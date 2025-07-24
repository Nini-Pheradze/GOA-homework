// Assign an anonymous function to a variable that multiplies two numbers.

const multiply = function(a, b) {
    return a * b
};

console.log(multiply(2, 5));


// Pass an anonymous function into setInterval() to log a message every 2 seconds.

setInterval(function() {
    console.log("Display every two seconds.")
}, 2000);


// Create an anonymous function as an event listener for a button click that displays an alert message.

document.getElementById("myButton").addEventListener("click", function() {
    alert("Button was clicked!")
})

