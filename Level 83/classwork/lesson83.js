// შექმენით სია სადაც გექნებათ რიცხვები
// ლუპის მეშვეობით გადაუარეთ ამ სიას და შეკრიბეთ ყველა რიცხვი სიაში(შეინახეთ ცვლადში),თუ ამ ცლადის მნიშნელობამ(სიაში მყოფი ელემენტების ჯამმა) გადააცილა 50-ს მაგ შემთხვევაში გაჩერდეს შეკრება

let number = [5, 10, 15, 20, 30];

let sum = 0;

for (let i = 0; i < number.length; i++) {
    sum += number[i];

    if (sum > 50) {
        break;
    }
}

console.log("Sum:", sum);


// შემქენით arrow function სადაც პარამეტრად გადასცემთ სიას. სიაში იქნება 10 ცალი სტრინგი.გამოიტანეთ მხოლოდ ისეთი სტრინგები რომელთა სიგრძე მეტი იქნება ხუთზე

// გამოიყენეთ: arrow function,for loop,if,continue

const arrowFunc = (str) => {
    for (let i = 0; i < str.length; i++) {
        if (str[i].length <= 5) {
            continue;
        }
        console.log(str[i]);
    }
};

const string = ["Mercedes-Benz", "BMW", "Audi", "Porsche", "Lexus", "Toyota", "Jeep", "Ford", "Tesla", "Nissan"];

arrowFunc(string);


// Print First 5 Even Numbers Using Arrow Function
// Create an arrow function that finds and prints the first 5 even numbers starting from 1 using a for loop.

// Use continue to skip odd numbers.

// Use break once 5 even numbers are printed.

const NumberFunc = () => {
    let count = 0;

    for (let i = 1; i <= 100; i++) {
        if (i % 2 !== 0) {
            continue; 
        }

    console.log(i); 
    count++;

    if (count === 5) {
        break; 
    }
}
};

NumberFunc()