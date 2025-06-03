// შექმენით ფუნქცია სახელად userLoop. ამ ფუნქციაში მომხმარებელს შემოატანინეთ ორი რიცხვი და შეინახეთ ისინი ცვლადებში, number მონაცემთა ტიპში.

// თქვენი დავალებაა, რომ პირველი რიცხვიდან მეორე რიცხვამდე ყველა რიცხვი დაბეჭდოთ კონსოლში. გამოიყენეთ ნებისმიერი ციკლი.

// ეს ფუნქცია გაუშვით მაშინ, როდესაც ვებსაიტი ჩაიტვირთება

function userLoop(){
    let user1 = Number(prompt("Enter Number: "));
    let user2 = Number(prompt("Enter Number: "));

    for (let i = user1; i < user2; i++){
        console.log(i);
    }
}

userLoop()



// html-ის დოკუმენტში დაამატეთ ერთი ინფუთი, ერთი ღილაკი და ერთი სათაური.

// external js-ში შექმენით ფუნქცია სახელად changeElements. 

// ამ ფუნქციაში წამოიღეთ ელემენტები id-ის გამოყენებით.

// 1) დაადგინეთ input-ის value და გამოიტანეთ კონსოლში.
// 2. ღილაკის ფონის ფერი გახადეთ შავი, ხოლო ტექსტის ფერი თეთრი.
// 3) სათაურის textAlign-ის მნიშვნელობა გაწერეთ center.
// 4) მთლიანი დოკუმენტის ფონის ფერი დააყენეთ მწვანე

function changeElemnts(){
    let input = document.getElementById("input1");
    let button = document.getElementById("button1");
    let h1 = document.getElementById("h1-1");

    console.log(input.value);

    button.style.backgroundColor = "black";

    button.style.color = "white"


    h1.style.
}