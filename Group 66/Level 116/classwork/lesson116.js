// პირველრიგში ახსენით კომენატრებით რა განსხვავებაა  imperative და declarative პროგრამირების პარადიგმებს შორის თავისი გამალითებით, შემდეგ ახსენით event-driver პროგრამირება რას ნიშნავს

// Imperative programming არის პარადიგმა, სადაც თქვენ კომპიუტერს ცალსახად ეუბნებით, რა ნაბიჯები უნდა გადადგას სასურველი შედეგის მისაღწევად. ეს თქვენი პროგრამის დეტალურ რეცეპტს ჰგავს.

// Declarative programming არის პარადიგმა, რომელიც ფოკუსირებულია იმაზე, თუ რა უნდა მიაღწიოს პროგრამამ, ამის მიღწევის გზების ცალსახად მითითების გარეშე.


// კომპიუტერულ პროგრამირებაში, event-driver პროგრამირება არის პროგრამირების პარადიგმა, რომელშიც პროგრამის მიმდინარეობა განისაზღვრება გარე მოვლენებით. მაუსებიდან, კლავიატურებიდან, სენსორული პანელებიდან და სენსორული ეკრანებიდან მომდინარე ინტერფეისის მოვლენები და გარე სენსორული input-ები.


// const events = require("events");

// const eventEmitter = new events.EventEmitter();

// eventEmitter.on("sum", (a, b) => {
//     console.log("Sum is:", a + b);
// });


// eventEmitter.on("greet", (name) => {
//     console.log(`Hello, ${name}!`);
// });


// eventEmitter.emit("sum", 5, 7);  

// eventEmitter.emit("greet", "Nini");


//  fs მოდულის დახმარებით, შექმენით პროგრამა, სადაც მოხმარებელს შემოაქვს ინფორმაცია თქვენი დავალება ეგ ინფორმაცია თან დაამატოთ ტექსტურ ფაილში

const fs = require("fs");

console.log("შეიყვანე ტექსტი ტექსტურ ფაილში დასამატებლად: ");

process.stdin.on('data', function (data) {
    const text = data.toString() + "\n";

    fs.appendFile('user.txt', text, function(err) {
        if (err) {
            console.log("ფაილში შეცდომაა: ", err);
        } else {
            console.log("ტექტსი წარმატებით დაემატა!");
        };

        process.exit();
    });
});