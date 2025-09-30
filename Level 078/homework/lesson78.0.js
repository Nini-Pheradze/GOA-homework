// Select all <p> tags on a webpage and display the total number of them in an alert box.

const pTags = document.getElementsByTagName('p');

alert(`Total number of <p> tags: ${pTags.length}`);

console.log(`Found ${pTags.length} <p> tags on this page`);

// Change the text color of all <h2> elements on the page to blue.

let heading2 = document.getElementsByTagName('h2');

for (let i = 0; i < heading2.length; i++) {
    heading2[i].style.color = "blue";
};

// Retrieve all <li> elements and log the text content of each one to the console.

let litag = document.getElementsByTagName('li');

for (let i = 0; i < litag.length; i++) {
    console.log(litag[i].textContent);
};

// Select all <div> elements and set their background color to lightgray.

let div = document.getElementsByTagName('div');

for (let i = 0; i < div.length; i++) {
    div[i].style.backgroundColor = "lightgray";
};

// Find the first <img> tag on the page and change its src attribute to a different image URL. ????

let image = document.getElementsByTagName('img');
image.src = "image1.jpg";
