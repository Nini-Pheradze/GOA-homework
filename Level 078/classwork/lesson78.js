// html-ის სტრუქტურაში ჩაამატეთ 5 პარაგრაფი. js-ში წამოიღეთ ხუთივე პარაგრაფი. შემდეგ, შექმენით ერთი ცარიელი მასივი. for ციკლით გადაუარეთ პარაგრაფების მასივს და იმ ცარიელ მასივში ჩაამატეთ თითოეული პარაგრაფის textContent კუთვნილება.

// საბოლოოდ დაბეჭდეთ მეორე მასივი მთლიანად.

let paragraphs = document.getElementsByTagName("p");


let texts = [];

for (let i = 0; i < paragraphs.length; i++) {
    texts[i] = paragraphs[i].textContent;
}

console.log(texts);


// html-ის სტრუქტურაში ჩაამატეთ ერთი დივ ბლოკი. ეს დივ ბლოკი წამოიღეთ js-ში.

// for ციკლით იტერაცია მოახდინეთ 5-ჯერ და თითოუელ იტერაციაზე შექმენით ერთი პარაგრაფი, ამ პარაგრაფს გაუწერეთ თავისი ტექსტიც. შემდეგ, ეს პარაგრაფი ჩაამატეთ დივ ბლოკში.


let div = document.getElementById("div-main");

let pCount = 1;

for (let i = 1; i < 5; i++) {
    let p = document.createElement('p');

    let pText = document.createTextNode('Hello World,' + String(pCount));

    p.appendChild(pText)

    pCount++;

    div.appendChild(p);
};


// ვებსაიტზე დაამატეთ ერთი დივ ბლოკი და მასში მოათავსეთ სამი პარაგრაფი. დივ ბლოკის გარეთ აიღეთ 2 პარაგრაფი.

// js-ში წამოიღეთ დივ ბლოკი და getElementsByTagName მეთოდის გამოყენებით, კონსტანტაში შეინახეთ ამ დივ ბლოკში არსებული ყველა პარაგრაფი. შემდეგ, ციკლით გადაურეთ დივ ბლოკს და მის თითოეულ ელემენტს ტექსტის ფერი გაუწერეთ მწვანე, ასევე ფონის ფერი გაუწერეთ შავი

let mydiv = document.getElementById('div');

const divblock = document.getElementsByTagName('p');

for (let i = 0; i < divblock.length; i++) {
    divblock[i].style.color = "green";
    divblock[i].style.backgroundColor = "black";
};
