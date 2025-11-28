// Sum numbers until total exceeds 100

// Continuously ask the user to enter numbers using prompt(), adding each number to a total. Stop when the total exceeds 100.

// გამოიყენეთ do while ციკლი

let total = 0;

do {
    let number = Number(prompt("Enter Number: "));

    if (!isNaN(number)) {
    total += number;
    } else {
    alert("Enter Another!");
    }
} while (total <= 100);

// html-ის სტრუქტურაში ჩაამატეთ ერთი დაულაგებელი სია.

// js-ში გადაიტანეთ ეს ობიექტი:

// let myObj = {
//     name: "David",
//     surname: "Tezelashvili",
//     academy: "GOA",
//     isMentor: true,
//     num: 100,
//     hobbies: ["programming", "bike", "basketball"],
//     favColor: "Blue"
// }

// შემდეგ, ამ ობიექტს გადაუარეთ for in ციკლით. თითოეულ იტერაციაზე შექმენით ორი სიის ელემენტი. პირველი ელემენტის ტექსტი უნდა იყოს ობიექტის გასაღები. ხოლო მეორე ელემენტის ტექსტი უნდა იყოს მაგ გასაღების მნიშვნელობა. საბოლოოდ, ორივე დაულაგებელი სიის ელემენტი ჩაამატეთ დაულაგებელ სიაში

let ul = document.getElementById('ul')
let myObj = {
    name: "Nini",
    surname: "Pheradze",
    academy: "GOA",
    isStudent: true,
    num: 3,
    hobbies: ["cycling", "swimming", "reading"],
    favColor: "white"
};


for (let key in myObj) {
    let keyItem = document.createElement("li");
    keyItem.textContent = "Key: " + key;

    let valueItem = document.createElement("li");
    valueItem.textContent = "Value: " + myObj[key].toString();

    ul.appendChild(keyItem);
    ul.appendChild(valueItem);
};


// შექმენით მასივი, სადაც გექნებათ 2 სთრინგი, 2 რიცხვი და 2 ბულეანი.
// მასივს გადაუარეთ for of ციკლით. თითოეულ იტერაციაზე შეამოწმეთ მასივის ელემენტის მონაცემთა ტიპი. თუ ის სთრინგია, უბრალოდ დაბეჭდეთ. თუ ის რიცხვია, დაბეჭდეთ მასზე 10-ით მეტი რიცხვი. ხოლო, თუ ის ბულეანია, დაბეჭდეთ მისი საწინააღმდეგო ბულეანი

const array = ['Nini', 'Pheradze', 20, 30, true, false];

for (const item of array) {
    if (typeof item === "string") {
        console.log(item);
    } else if (typeof item === "number") {
        console.log(item + 10);
    } else if (typeof item === "boolean") {
        console.log(!item);
    }
};
