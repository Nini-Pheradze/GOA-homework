// html-ის სტრუქტურაში ჩაამატეთ ერთი დივ ბლოკი და მას გაუწერეთ id.

// js-ში შექმენით ფუნქცია სახელად addNewElement. ამ ფუნქციაში ჯერ წამოიღეთ დივ ბლოკი, შემდეგ შექმენით ღილაკი. ღილაკს გაუწერეთ თავისი ტექსტი - გამოიყენეთ პირდაპირ textContent ან createTextNode და appendChild მეთოდები. საბოლოოდ ღილაკი ჩაამატეთ დივ ბლოკში. 

// ამ დავალებისთვის დაგჭირდებათ შემდეგი მეთოდები და კუთვნილებები: getElementById, textContent, createTextNode, appendChild

function addNewElement() {
    let div = document.getElementById('div1');

    let button = document.createElement("button");

    let buttontext = document.createTextNode("Click Me ")

    button.appendChild(buttontext);

    div.appendChild(button);
}


addNewElement()


// html-ის სტრუქტურაში ჩაამატეთ ერთი დივ ბლოკი და მასში ჩააშენეთ ერთი პარაგრაფი და ერთი ღილაკი.

// js-ში შექმენით ფუნქცია, რომელიც დივ ბლოკიდან ჯერ წაშლის ღილაკს, ხოლო შემდეგ პარაგრაფს შეცვლის i თეგით (ამ i თეგს აუცილებლად უნდა ჰქონდეს თავისი ტექსტი).

// ფუნქცია გამოიძახეთ მაშინ, როდესაც ვებსაიტი ჩაიტვირთება


function ReplaceRemove() {
    let div2 = document.getElementById("div2");

    let button2 = document.getElementById("btn");

    div2.removeChild(btn);

    let p = document.getElementById("p");

    let i = document.createElement("i");

    let itext = document.createTextNode("Hello World!");

    i.appendChild(itext);

    div2.replaceChild(i, p);
}

ReplaceRemove()