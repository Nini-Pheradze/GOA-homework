// შეადგინეთ ფუნქცია, რომელსაც 10 პარამეტრს გაუწერთ. ფუნქციის კოდის ბლოკში არგუმენტებს გადაუარეთ for of ციკლით და დაბეჭდეთ არგუმენტებიდან მხოლოდ ლუწი რიცხვები.

// ფუნქციას როდესაც გამოიძახებთ მას არგუმენტებად გადაეცით მხოლოდ რიცხვები.

function evenNumbers(a, b, c, d, e, f, g, h, i, j) {
    let numbers = [a, b, c, d, e, f, g, h, i, j];

    for (let num of numbers) {
        if (num % 2 === 0) {
            console.log(num);
        };
    };
};

evenNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);


// შეადგინეთ კონსტანტა და მასში შეინახეთ function keyword-ით შედგენილი ფუნქცია. ეს ფუნქცია უბრალოდ უნდა ბეჭდავდეს hello-ს. ზუსტად იგივე გააკეთეთ arrow ფუნქციაზე.

// კომენტარით დაწერეთ რომელი ფუნქცია იქნება მაგ ორიდან ანონიმური.


// anonymous function
const HelloWorld = function() {
    console.log("Hello World!");
};


// anonymous function
const sayHello = () => {
    console.log("Hello!");
};


// შეადგინეთ immediately invoked ფუნქცია რომელიც ეგრევე დააბრუნებს შედეგს და ეს შედეგი პირდაპირ დაბეჭდეთ კონსოლში.

console.log(
    (function() {
        return "Hello!";
    })()
);

// ჩამოწერეთ block, function და glocal scope-ების თითო-თითო მაგალითი


// function scope example

function myAge() {
    let age = 15;
    console.log("My Age is " + age);
};

myAge();
console.log(age);


// global scope example
let fullname = "Nini Pheradze";

function greet() {
    console.log("Hello, " + fullname + "!");
};


greet();
console.log(fullname);

