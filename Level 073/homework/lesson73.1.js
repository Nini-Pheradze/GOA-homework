// Create a new <p> element and add it to the body.
function createP() {
    let body = document.getElementById("body1");

    let p = document.createElement('p');

    p.textContent = "GOA IS THE BEST!";

    document.body.appendChild(p);
}

createP()

// Create an <h1> element with some text inside it and append it to a <div>.
function createH1() {
    let div = document.getElementById('div1');

    let h1 = document.createElement('h1');

    let h1Text = document.createTextNode('GOA - GOAL ORIENTED ACADEMY');

    h1.appendChild(h1Text);

    div.appendChild(h1);
}

createH1()

// Create an <img> element, set its src attribute to an image URL, and add it to the page.

function CreateIMG() {
    let div = document.getElementById('div2');

    let img = document.createElement('img');

    let url = document.createAttribute('src');

    url.value = 'https://miro.medium.com/v2/resize:fit:1030/1*Kx-1mo7QDdyBajkxHLvARg.png';

    img.setAttributeNode(url);

    div.appendChild(img);
}

CreateIMG()


// Create a <button> element with the text "Click me" and add it to the body.
function createBTN() {
    let body = document.getElementById("body1");

    let btn = document.createElement('button');

    let btnText = document.createTextNode("Click me");

    btn.appendChild(btnText);

    body.appendChild(btn);
}

createBTN()

// Create a <ul> element and add three <li> items to it with different text values.
function createUL() {
    let ul = document.createElement('ul');

    let li1 = document.createElement('li');
    let li2 = document.createElement('li');
    let li3 = document.createElement('li');

    li1.textContent = "first";
    li2.textContent = "second";
    li3.textContent = "three";

    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);

    document.body.appendChild(ul);
}

createUL()