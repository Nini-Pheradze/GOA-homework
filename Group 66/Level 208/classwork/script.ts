// 1) შექმენით ცვლადი რომელშიც შეინახავთ ან სტრინგს ან რიცხვს

let id: string | number;

// 2) თქვენი ობიექტის ტიპი სახელად Person სადაც 3 კუთვნბილება გექნებათ, შემდეგ შექმენით union ტიპის მასივი სადაც ან სტრინგს შეინახავთ ან Person ტიპს

type Person = {
    name: string,
    age: number,
    isStudent: boolean
};

let mixedArray: (string | Person)[] = [
    "Nini",
    { name: "Ana", age: 37, isStudent: false },
    "Elene",
    { name: "Lalo", age: 12, isStudent: true }
];

// 3) შექმენიტ ფუნქცია სადაც პარამეტრს აქვს UNION ტიპი და გამოიყენეთ type guard აგრეთვე ახსენით კომენატრებით რა არის type guard

function printInfo(value: string | Person): void {
    if (typeof value === "string") {
        console.log(`This is a string ${value}`);
    } else {
    console.log(`Name: ${value.name}, Age: ${value.age}`);
    }
};


// Type Guard არის შემოწმება, რომლის საშუალებითაც TypeScript-ს ვეუბნებით, კონკრეტულად რომელი ტიპია union-ის შემადგენელი ცვლადი მოცემულ if ბლოკში.
// ამის შემდეგ TypeScript ავტომატურად narrow-ს უკეთებს ტიპს  და გვაძლევს საშუალებას, უსაფრთხოდ გამოვიყენოთ ის property-ებიან მეთოდები, რომლებიც მხოლოდ კონკრეტულ ტიპს ახასიათებს.