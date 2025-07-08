// ✅ Homework 8: Dynamic Message List
// Create a <ul> using JS.

// Every 2 seconds, add a new <li> with text like "Message 1", "Message 2" etc.

// Stop adding items after 10 messages.

const ul = document.createElement('ul');
document.body.appendChild(ul);

let count = 1;

let interval = setInterval(function () {
    let li = document.createElement('li');
    li.textContent = "Message " + count;
    ul.appendChild(li);
    count++;

    if (count > 10) {
        clearInterval(interval); // გავაჩეროთ ინტერვალი 10 შეტყობინების შემდეგ
    }
    }, 2000); 


// ✅ Homework 9: Hide and Reveal
// Create one <div> and one <button>.

// When the button is clicked, the <div> hides (display: none).

// After 5 seconds, it becomes visible again.

let div = document.getElementById('myDiv');
let button = document.getElementById('hideButton');

button.addEventListener('click', function () {
    div.style.display = 'none';

    setTimeout(function () {
        div.style.display = 'block'; 
    }, 5000);
    });


// ✅ Homework 10: Element Counter by Tag
// Prompt the user to enter a tag name (like div, p, img).

// Count how many elements exist with that tag on the page.

// Display the result in an alert.

let tagName = prompt("Enter a tag name (e.g. div, p, img):");

if (tagName) {
    let elements = document.getElementsByTagName(tagName);
    let count = elements.length;

    alert("There are " + count + " <" + tagName + "> elements on the page.");
    }