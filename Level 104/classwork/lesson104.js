// შექმენით კლასი სახელად Bank, რომლითაც შეადგენთ ობიექტს და მას ექნება ერთი მეთოდი. ობიექტს უნდა ჰქონდეს ორი კუთვნილება: username, balance (თავიდან იყოს 0-ის ტოლი).


// ხოლო მეთოდი იქნება deposit, რომელსაც გადმოეცემა რაღაც რიცხვი და ამ მეთოდის დავალება იქნება, რომ balance-ში რაც ინახებოდა მაგას დაუმატოს გადმოცემული რიცხვი და ეს ჯამი შეინახოს balance კუთვნილებაში.

// ამ კლასით შექმენით ერთი ობიექტი და მასზე გამოიძახეთ ეს deposit მეთოდი.

class Bank {
    constructor (username) {
        this.username = username;
        this.balance = 0;
    }

    deposit(amount) {
        this.balance += amount;
        console.log(`ჩარიცხული: ${this.balance}`);
    }
}

let obj = new Bank("Nini");

obj.deposit(250);
obj.deposit(150);



// შექმენით კლასი სახელად car, რომელსაც ექნება brand და model კუთვნილებები. როდესაც ამ კლასის ობიექტზე გამოიძახებთ start მეთოდს, უნდა დაიბეჭდოს "BRAND MODEL is running"


class Car {
    constructor (brand, model) {
        this.brand = brand;
        this.model = model;
    }

    start() {
        console.log(`${this.brand} ${this.model} is running`);
    }
}

let myCar = new Car("Mersedes", "CLS");
myCar.start();