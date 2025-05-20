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


// შექმენით ფორმა, რომელსაც მიანიჭებთ id-ს. ამ ფორმაში დაამატეთ ერთი ინფუთი და მას გაუწერეთ name ატრიბუტი. როდესაც ფორმა დადასტურდება, ვებსაიტი არ უნდა დარეფრეშდეს და ამ ინფუთის value უნდა გამოიტანოს alert box-მა