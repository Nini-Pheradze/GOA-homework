// Click Alert
// Add an event listener to a button so that when it's clicked, an alert box displays a message.

let btn = document.getElementById('btn1');

btn.addEventListener('click', function() {
    alert('Button is clicked!');
});

// Change Text on Hover
// Add an event listener to a paragraph so that when the mouse hovers over it, the text changes to something else.
let paragraph = document.getElementById('par1');

paragraph.onmouseover = function() {
    paragraph.textContent = 'lorem, lorem!'
}

// Toggle Background Color
// Add an event listener to a div so that when it's clicked, its background color toggles between two colors.
let box = document.getElementById("colorBox");

box.addEventListener("click", function() {
    if (box.style.backgroundColor === "lightblue") {
        box.style.backgroundColor = "lightgreen";
    } else {
        box.style.backgroundColor = "lightblue";
    }
});


// Log Input Value on click
// Add an event listener to a text input so that every time an input is clicked, the current value of the input is logged to the console.
let input = document.getElementById("myInput");

input.addEventListener("click", function() {
    console.log("Input value:", input.value);
});

// Show/Hide Image on Button Click
// Add an event listener to a button so that when it’s clicked, it shows or hides an image on the page.

let button = document.getElementById("toggleBtn");
let image = document.getElementById("myImage");

button.addEventListener("click", function() {
    if (image.style.display === "none") {
        image.style.display = "block";
    } else {
        image.style.display = "none";
    }
});
