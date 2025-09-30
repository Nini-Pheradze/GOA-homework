// Select a <div> with the id content and use removeChild to remove its first child element.
// Get the div with id "content"
let contentDiv = document.getElementById("content");

let first = contentDiv.children[0];

if (first) {
    contentDiv.removeChild(first);
};

// Create a <ul> with three <li> items, then use removeChild to remove the last <li> from the <ul>.

const ul = document.getElementById("myList");

const lastLi = ul.children[ul.children.length - 1];

if (lastLi) {
    ul.removeChild(lastLi);
}
