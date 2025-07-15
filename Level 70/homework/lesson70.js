// Print numbers from 1 to 10 using a for loop.

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Print even numbers from 2 to 20 using a while loop

let n = 2;
while (n <= 20) {
    console.log(n);
    n += 2;
}

// Print the numbers from 10 down to 1 using a for loop.

for (let x = 10; n >= 1; n--){
    console.log(n)
}

// Print the first 5 multiples of 3 using a while loop.

let i = 1;
while (i <= 5) {
    console.log(i * 3);
    i ++
}

// Print each character of a string using a for loop.

let str = "PHERADZE"

for (i = 0; i < str.length; i ++) {
    console.log(str(i))
}

// Change the text content of a paragraph when a button is clicked.

function change() {
    document.getElementById("par").textcontent = "text has been changed"
}

change()

// Change the background color of a div when a button is clicked.

function div() {
    document.getElementById("div").style.backgroundColor = "green";
}

div()

// Change the font size of a heading when a button is clicked.

function fontsize() {
    document.getElementById("font").style.fontsize = "500px"
}

fontsize()

// Hide a div by setting its display style to none when a button is clicked.

function hideDiv() {
    document.getElementById("hideDiv").style.display = "none";
}

hideDiv()


// Show an alert with a custom message when a button is clicked.

function ShowMessage() {
    alert("Hello! This is a custom message.");
}

ShowMessage()
