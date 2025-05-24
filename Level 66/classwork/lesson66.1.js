// შექმენით ფუნქცია სახელად compareNums, რომელსაც ექნება 2 პარამეტრი - num1, num2. ფუნქციამ უნდა აწარმოოს შემდეგი შედარების ოპერაციები ამ რიცხვებზე: >, >=, <, <=, ==, ===, !=, !==.

// ფუნქცია გამოიძახეთ 3-ჯერ, განსხვავებული არგუმენტებით 

function compareNums(num1, num2){
    console.log(num1 > num2);
    console.log(num1 >= num2);
    console.log(num1 < num2);
    console.log(num1 <= num2);
    console.log(num1 == num2);
    console.log(num1 === num2);
    console.log(num1 != num2);
    console.log(num1 !== num2);
}

compareNums(8, 30);
compareNums(10, 12)
compareNums(29, 3)


function getFromData(e){
    e.preventDefaault();

    let from = document.getElementById("main-form");

    let name = from.elements.name.value;

    let surnmae = from.elements.surname.value;

    let academy = from.elements.academy.value;

    console.log(name, surname, academy);

    from.reset()
}