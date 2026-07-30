"use strict";
// 2) შექმენით ცვლადი value, რომელსაც ექნება ტიპი string | number. თავდაპირველად მიანიჭეთ სტრინგი, შემდეგ შეცვალეთ მისი მნიშვნელობა რიცხვით და ორივე მნიშვნელობა დაბეჭდეთ console.log()-ის გამოყენებით.
Object.defineProperty(exports, "__esModule", { value: true });
let value;
value = 'Hello, World!';
console.log(value);
value = 8;
console.log(value);
// 3) შექმენით ფუნქცია printId(id: string | number), რომელიც მიიღებს id-ს. თუ id იქნება string, დაბეჭდეთ "String ID: " და მისი მნიშვნელობა, ხოლო თუ number იქნება, დაბეჭდეთ "Number ID: " და მისი მნიშვნელობა. გამოიყენეთ Type Narrowing.
function printId(id) {
    if (typeof id === 'string') {
        console.log(`String ID: ${id}`);
    }
    ;
    if (typeof id === 'number') {
        console.log(`Number ID: ${id}`);
    }
}
;
printId('abc');
printId(3883);
// 4) შექმენით ფუნქცია getMessage(value: string | number), რომელიც თუ მიიღებს სტრინგს, დააბრუნებს "Text: " და მნიშვნელობას, ხოლო თუ მიიღებს რიცხვს, დააბრუნებს "Number: " და მნიშვნელობას. ფუნქციის დაბრუნებული ტიპი TypeScript-მა თავად უნდა განსაზღვროს. გამოიძახეთ ფუნქცია როგორც სტრინგით, ასევე რიცხვით.
function getMessage(value) {
    if (typeof value === 'string') {
        console.log(`Text: ${value}`);
    }
    ;
    if (typeof value === 'number') {
        console.log(`Number: ${value}`);
    }
    ;
}
;
getMessage('Nini');
getMessage(8338);
// 5) შექმენით მასივი, რომლის ტიპი იქნება (string | number)[]. დაამატეთ მინიმუმ 3 სტრინგი და 3 რიცხვი. შემდეგ for...of ციკლის გამოყენებით შეამოწმეთ თითოეული ელემენტის ტიპი. თუ ელემენტი სტრინგია, დაბეჭდეთ იგი დიდი ასოებით (toUpperCase()), ხოლო თუ რიცხვია, დაბეჭდეთ მისი კვადრატი.
let mixedArray = ['Nini', 8, 'Lalo', 12, 'Elene', 29];
for (const element of mixedArray) {
    if (typeof element === 'string') {
        console.log(element.toUpperCase());
    }
    ;
    if (typeof element === 'number') {
        console.log(element ** 2);
    }
    ;
}
;
function showStatus(status) {
    switch (status) {
        case 'success':
            console.log("Completed successfully!");
            break;
        case 'error':
            console.log("There is an error!");
            break;
        case 'loading':
            console.log("Operation is loading...");
    }
    ;
}
;
showStatus("success");
showStatus("loading");
showStatus("error");
//# sourceMappingURL=script.js.map