// ✅ Homework 1: Heading Formatter
// Select all <h1> and <h3> tags.

// Change their text color to green.

// Add a black border around each one.

// Set the font size to 30px for <h1> and 24px for <h3>.

let h1Style = document.getElementsByTagName('h1');

for (let h1 of h1Style) {
    h1.style.color = "green";

    h1.style.border = "5px solid black";

    h1.style.fontsize = "30px";
};

let h3Style = document.getElementsByTagName('h3');

for (let h3 of h3Style) {
    h3.style.color = "green"

    h3.style.border = "3px solid black";

    h3.style.fontsize = "24px";
};

// ✅ Homework 2: Paragraph Word Counter
// Select all <p> tags.

// For each <p>, count how many words it contains.

// Log each count in the console like:
// Paragraph 1 has 14 words, Paragraph 2 has 5 words...

let par = document.getElementsByTagName('p');

for (let i = 0; i < par.length; i++) {
    let text = par[i].textContent;

    let words = text.split(" ");

    let wordCount = words.length;

    console.log("Paragraph" + " " + (i + 1) + " " + "has" + " " + wordCount + " " + "words");
};

// ✅ Homework 3: Image Gallery Resize
// Select all <img> elements.

// Set their width to 200px and border radius to 10px.

// If the image alt text contains the word "cat", set the border color to orange.

let images = document.getElementsByTagName('img');

for (let i = 0; i < images.length; i++) {
    let img = images[i];

    img.style.width = '200px';

    img.style.borderRadius = '10px';

    img.style.border= '3px solid black';

    if (img.alt.includes('cat')) {
        img.style.borderColor = 'orange';
    }
};

// ✅ Homework 4: Animate Circles
// Create 3 <div>s with the class "circle" using JavaScript.

// Style them as small circles (e.g., width and height 50px, border-radius: 50%, background: purple).

// Animate them moving right 10px every 200ms using setInterval.

function circle() {
    let divBlock = document.createElement('div');
    divBlock.className = 'circle';

    divBlock.style.width = '50px';
    divBlock.style.height = '50px';

    divBlock.style.borderRadius = '50%';

    divBlock.style.backgroundColor = 'purple';

    document.body.appendChild(divBlock);

    return divBlock;
};



// ✅ Homework 5: List Alternating Color
// Select all <li> tags.

// Give even-indexed items a background color of skyblue.

// Give odd-indexed items a background color of lightgray.

// ✅ Homework 6: Interactive Box Movement
// Create one <div> and one <button> with JavaScript.

// When the button is clicked:

// The box moves right by 20px.

// The background color randomly changes.

// ✅ Homework 7: Form Input Length Warning
// Select all <input> elements of type "text".

// If a user types more than 20 characters, the input background turns red.

// If under 20, it stays white.

// ✅ Homework 8: Dynamic Message List
// Create a <ul> using JS.

// Every 2 seconds, add a new <li> with text like "Message 1", "Message 2" etc.

// Stop adding items after 10 messages.

// ✅ Homework 9: Hide and Reveal
// Create one <div> and one <button>.

// When the button is clicked, the <div> hides (display: none).

// After 5 seconds, it becomes visible again.

// ✅ Homework 10: Element Counter by Tag
// Prompt the user to enter a tag name (like div, p, img).

// Count how many elements exist with that tag on the page.

// Display the result in an alert.