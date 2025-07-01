// Select all elements with the class name highlight and change their background color to yellow.

let yellowBackGround = document.getElementsByClassName('MyDiv');

for (let i = 0; i < yellowBackGround.length; i++) {
    yellowBackGround[i].style.backgroundColor = 'yellow';
};

// Count how many elements have the class card and display the number in the console.

let elements = document.getElementsByClassName('div-main');

console.log(elements.length)

// Select all elements with the class error and change their text color to red.

let error = document.getElementsByClassName('error');

for (let i = 0; i < error.length; i++) {
    error[i].style.color = 'red';
};

// Retrieve all elements with the class item and log the innerHTML of each one to the console.

let item = document.getElementsByClassName('item');

for (let i = 0; i < item.length; i++) {
    console.log(item[i].innerHTML);
};


// Select the first element with the class button and change its text to "Clicked!".

let btn = document.getElementsByClassName('btn')[0];

if (btn) {
    btn.textContent = "Clicked!";
};

// Move a <div> element 5 pixels to the right every 100 milliseconds, creating a smooth sliding animation effect. ?????

// function slideDiv() {
//     const div = document.getElementsByTagName('div');
//     let position = 0;
    
//     setInterval(() => {
//         position += 5;
//         div.style.left = position + 'px';
//     }, 100);
// };

// slideDiv();

