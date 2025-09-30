// Create a function that displays an alert saying "Hello, world!".
// Create an external JavaScript file and link it to an HTML file.
// Move a function from the HTML file’s <script> tag into an external .js file.

function greet(){
    alert("Hello, World!");
}

greet()


// Write a function that takes a name as a parameter and logs "Hello, [name]!" to the console.
function hello(name) {
    console.log(`Hello, ${name}!`);
}

hello("Nini")

// Create a function that adds two numbers and returns the result.

function addition(a, b) {
    return a + b;
}

console.log(addition(5, 3));
console.log(addition(4, 4));
console.log(addition(1, 7));


// Write a function that multiplies a number by 10 and returns the value.
function multiplication(a) {
    return a * 10;
}

console.log(multiplication(1, 10));
console.log(multiplication(2, 10));
console.log(multiplication(3, 10));


// Create multiple functions in an external JS file and call them from different buttons in your HTML page.
function button1() {
    alert("Welcome");
}

function button2() {
    alert("To our Website!");
}

function button3() {
    alert("Good Luck!");
}


// In your external JS file, write a function that changes the text of a paragraph when a button is clicked.
function changer() {
    let paragraph = document.getElementById("myParagraph");
    paragraph.textContent = "Here I am - changed paragraph text."
}
