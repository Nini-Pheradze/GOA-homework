// Prompt the user for their favorite hobby and display it in an alert.
function hobby() {
    let hobby = prompt("What's your favourite hobby?");
    alert("Your favorite hobby is " + (hobby || "not specified"));
}

hobby()

// Ask the user for their first and last name (two prompts), then concatenate and display the full name in an alert.
function fullName() {
    let name = prompt("What's your name?");
    let surname = prompt("What's your surname?");
    let fullname = name + " " + surname;
    alert("Your fullname - " + fullname);
}

fullName()

// Prompt the user for a message and update the text content of a <p> element on the page with it.
function userMessage() {
    let message = prompt("Enter your message: ");
    document.getElementById("paragraph").textContent = message;
}

userMessage()

// Prompt the user for their favorite emoji and display it in an alert along with a thank you message.
function favouriteEmoji() {
    let emoji = prompt("Enter your favourite emoji: ");
    alert("Thank you! Your favourite emoji - ", emoji);
}

// Prompt the user to enter a word and use document.title to set the page’s title to that word.
function pageTitle() {
    let word = prompt("Enter a word to set as the page title:");
    document.title = word;
    alert("Your page's title is " + word)
}

pageTitle()

// Create a form with a text input and a button. When the button is clicked, take the value from the text input and display it in an alert.
function showInputValue() {
    let input = document.getElementById("userInput").value;
    alert("You entered: " + input);
}

// Make a form with a color input and a submit button. When submitted, set the page’s background color to the selected color.
function setBackgroundColor() {
    color = document.getElementById("colorPicker").value;
    document.body.style.backgroundColor = color;
}

setBackgroundColor()

// Build a form with two text inputs (like "first name" and "last name") and a button. On button click, combine the values and display the full name inside an <h1> element on the page.

function displayFullName() {
    let first = document.getElementById("firstName").value;
    let last = document.getElementById("lastName").value;
    let fullName = first + " " + last;

    document.getElementById("fullNameDisplay").textContent = fullName;
}

displayFullName()
