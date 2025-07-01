// Find the first <img> tag on the page and change its src attribute to a different image URL.with for loop

// let images = document.getElementsByTagName('img');

// for (let i = 0; i < images.length; i++) {
//     if (i === 0) {
//         images[i].src = 'https://st5.depositphotos.com/1050775/71852/i/450/depositphotos_718520844-stock-photo-young-woman-stands-tranquil-lake.jpg';
//     }
// };

// შექმენით 5 ცალი დივი.მიეცით კლასი და გასტილეთ ჯავას სკრიპტით.მიეცით ერთნაიარი ფერი და მოამრგვალეთ კუთხეები.გააკეთეთ ანიმაცია,რომელიც ყველა დივს წაიყვანს მარჯვნივ


// let box = document.getElementById('box');
// let button = document.getElementById('btn');


// let position = 0;

// let colors = ['red', 'green', 'blue', 'orange', 'purple'];

// button.addEventListener('click', () => {
//     position += 10;
//     box.style.left = position + 'px';

//     let colorIndex = 0;
//     let colorChange = setInterval(() => {
//     box.style.backgroundColor = colors[colorIndex];
//     colorIndex++;

//     if (colorIndex >= colors.length) {
//         clearInterval(colorChange);
//     }
//     }, 2000);
// });

// box.style.width = '100px';
// box.style.height = '100px';
// box.style.position = 'relative';
// box.style.backgroundColor = 'gray';
// box.style.borderRadius = '15px';
// box.style.transition = 'left 0.3s, background-color 0.5s';


// // ჯავა სკრიპტით შექმენით ერთი დივი და ერთი ღილაკი,ღილაკზე დაჭერის დროს,დივს შეუცვალეთ ფერი და მიეცით ზომები ყოველ 3 წამში შეიქმნას p თეგი სადაც დაწერილი იქნება ასე:p1,p2,p3 და ა.შ.div ის ზომა კი ნელ-ნელა შევამციროთ,საბოლოოდ კი გავაქროთ

// // გამოიყენეთ:createelement,createTextNode,for loop,setInterval


// let btn = document.createElement('button');
// btn.textContent = 'click';
// document.body.appendChild(btn);

// let box = document.createElement('div');
// document.body.appendChild(box);

// box.style.width = '200px';
// box.style.height = '200px';
// box.style.backgroundColor = 'skyblue';
// box.style.marginTop = '20px';
// box.style.transition = 'all 0.5s';

// button.addEventListener('click', () => {
//     box.style.backgroundColor = 'tomato';
//     box.style.width = '200px';
//     box.style.height = '200px';

//     let counter = 1;
//     let width = 200;
//     let height = 200;

//     let interval = setInterval(() => {

//         let p = document.createElement('p');
//         let text = document.createTextNode('p' + counter);
//         p.appendChild(text);
//         document.body.appendChild(p);

//         width -= 20;
//         height -= 20;

//         if (width <= 0 || height <= 0) {
//         box.style.display = 'none';
//         clearInterval(interval);
//         } else {
//         box.style.width = width + 'px';
//         box.style.height = height + 'px';
//         }

//         counter++;
//     }, 3000);
// });



// Dynamic List Item Styling
// Select all <li> elements.
// If the text length is more than 10 characters, change the background color to lightpink, otherwise to lightgreen.

let listItems = document.querySelectorAll('li');
    listItems.forEach(li => {
        if (li.textContent.length > 10) {
            li.style.backgroundColor = 'lightpink';
        } else {
            li.style.backgroundColor = 'lightgreen';
        }
        });