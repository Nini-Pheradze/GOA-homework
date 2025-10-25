// 1. შექმენით 5 რიცხვიანი მასივი.
// 2. მასივს გადაუარეთ მაპით, ლუწებს დაემატოთ 10, ხოლო კენტებს დააკლდეთ 10 - პირობის შემოწმება და რიცხვის დამატება/დაკლება ჩაიწეროს ternary operator-ის სახით.
// 3. შექმენით ფუნქცია, რომელსაც ექნება 5 პარამეტრი და ამ ფუნქციამ უბრალოდ დაბეჭდოს ხუთივე პარამეტრის ჯამი.
// 4. ფუნქცია გამოიძახეთ და spread ოპერატორის გამოყენებით გადაეცით 5 ელემენტიანი რიცხვების მასივის ყველა ელემენტი.

let myNumbers = [10, 20, 30, 47, 50];
myNumbers = myNumbers.map(num => num % 2 === 0 ? num + 10 : num-10);
const myFunc = (n1, n2, n3, n4, n5) => {
    console.log(n1 + n2 +  n3 + n4 + n5);
}

myFunc(...myNumbers)

// Create a function that accepts any number of arguments using the rest operator and returns the largest number.

const largestNumber = (...allNumbers) => {
    let result = allNumbers.length > 0 ? allNumbers[0] : "There are no arguments";

    for (let num of allNumbers) result = num > result ? num : result 

    return result
}

console.log(largestNumber());
console.log(largestNumber(1, 2, 3, 4));
console.log(largestNumber(12, 24, 48, 96, 192));

// შექმენით ფოლდერი სახელად third_cw, სადაც გექნებათ 3 js-ის ფაილი.

// I js-ის ფაილიდან დააექსპორტეთ თქვენი სახელი და გვარი (ორ ცვლადად).

// II js-ის ფაილიდან დააექსპორტეთ ასინქრონული ფუნქცია, რომელიც ნებისმიერი api link-დან წამოიღებს ინფორმაციას და დაბეჭდავს მას კონსოლში.

// III js-ის ფაილში დააიმპორტეთ ყველა დაექსპორტებული ინფორმაცია და დაბეჭდეთ თითოეული.