// Create a new <p> element and use replaceChild to replace an existing <p> inside a <div> with the id textContainer.
function ReplaceElement() {
    let div = document.getElementById('textcontainer');

    let childdiv = document.createElement('div');

    childdiv.textContent = 'Hello World!';

    let old = div.firstChild;

    div.replaceChild(childdiv, old)
}

ReplaceElement()

// Use replaceChild to swap out a <button> inside a <div> with a new <span> element.

// Find a <ul> with one <li> and use replaceChild to replace that <li> with a new one.

// Replace an <h2> element with a new <h1> element using replaceChild.