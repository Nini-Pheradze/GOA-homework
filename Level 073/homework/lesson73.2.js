// Create a new <p> element and use replaceChild to replace an existing <p> inside a <div> with the id textContainer.
function ReplaceElement() {
    let div = document.getElementById('textcontainer');

    let childdiv = document.createElement('div');

    childdiv.textContent = 'Hello World!';

    let old = div.firstChild;

    div.replaceChild(childdiv, old)
};

ReplaceElement()

// Use replaceChild to swap out a <button> inside a <div> with a new <span> element.
// window.onload = 
function repalceBTN() {
    let container = document.getElementById("container");
    let oldButton = document.getElementById("myButton");

    let newSpan = document.createElement("span");
    newSpan.textContent = "Button replaced with span";

    container.replaceChild(newSpan, oldButton);
};

repalceBTN()


// Find a <ul> with one <li> and use replaceChild to replace that <li> with a new one.

function replaceLI() {
    let UL = document.getElementById('ul');

    let oldli = document.getElementById('li');

    let newli = document.createElement('li');

    newli.textContent = "second";

    UL.replaceChild(newli, oldli);
};

replaceLI()


// Replace an <h2> element with a new <h1> element using replaceChild.

let header = document.getElementById("header");

let oldH2 = document.getElementById("subtitle");

let newH1 = document.createElement("h1");
newH1.textContent = "This is the new title";

header.replaceChild(newH1, oldH2);

