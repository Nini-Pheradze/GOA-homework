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

let circle = [];

for (let i = 0; i < 3; i++) {
    let div = document.createElement("div");
    div.classList.add("circle");
    div.style.top = `${i * 60}px`; 
    div.style.left = `0px`;
    document.body.appendChild(div);
    circle.push({ element: div, position: 0 });
    };

setInterval(() => {
    circle.forEach((circle) => {
        circle.position += 10;
        circle.element.style.left = circle.position + "px";
    });
    }, 200);




// ✅ Homework 5: List Alternating Color
// Select all <li> tags.

// Give even-indexed items a background color of skyblue.

// Give odd-indexed items a background color of lightgray.

let li = document.getElementsByTagName('li');

for (let i = 0; i < li.length; i++) {
    if (i % 2 === 0) {
        li[i].style.backgroundColor = "skyblue";
    } else {
        li[i].style.backgroundColor = "lightgray";
    };
};



// ✅ Homework 6: Interactive Box Movement
// Create one <div> and one <button> with JavaScript.

// When the button is clicked:

// The box moves right by 20px.

// The background color randomly changes.

let box = document.createElement('div');
box.id = 'box';

document.body.appendChild(box);

let btn = document.createElement('button');
btn.id = 'btn';

document.body.appendChild(btn);

let left = 0;

function randomColor() {
    return "rgb(" +
    Math.floor(Math.random() * 256) + "," +
    Math.floor(Math.random() * 256) + "," +
    Math.floor(Math.random() * 256) + ")";
};

btn.onclick = function () {
    left += 20;
    box.style.left = left + "px";
    box.style.backgroundColor = randomColor();
};


// ✅ Homework 7: Form Input Length Warning
// Select all <input> elements of type "text".

// If a user types more than 20 characters, the input background turns red.

// If under 20, it stays white.

let input = document.getElementsByTagName('input');

for (let i = 0; i < input.length; i++) {
    let input = input[i];

    if (input.type === "text") {
        input.addEventListener('input', function (){ 
            if (input.value.length > 20) {
                input.style.backgroundColor = 'red';
            } else {
                input.style.backgroundColor = 'white';
            };
        });
    };
};
