// შექმენით ისეთი ტიპის სიები,რომლებიც დრეს ვისწავლეთ.თითოუელს გაუწერეთ lenght&concat და დაწერეთ თუ რა სხვაობაა თითოეულ სიას შორის

let girlnames = new Array("Nini", "Elene", "Lali");

let boynames = new Array("Irakli", "George", "David");

let concatedarrays = girlnames.concat(boynames);
console.log(concatedarrays);
console.log(girlnames.length);
console.log(boynames.length);

let fruit = new Array(2)

fruit[0] = "Orange"
fruit[1] = "grape"

console.log(fruit.length)


let cars = new Array()

cars[0] = "Mercedes-Benz";
cars[1] = "BMW";
cars[2] = "Audi";
cars[3] = "Porsche";
cars[4] = "Toyota";

console.log(cars.length);


let vegetables0 = ["tomato", "potato"]
let vegetables1 = ["cucamber"]
console.log(vegetables0.concat(vegetables1));
console.log(vegetables0.length)



// ``` გააკეთეთ რანდომ რიცხვი 1 დან 100 ის ჩათვლით.prompt-ის საშულებით თქვენ უნდა შეიყვანოთ რიცხვი და ეცადოთ გამოიცნოთ რანდომ რიცხვი.თუ თქვენი ჩაწერილი იქნება მეტი ვიდრე random გამოიტანსოს მეტია,თუ თქვენი რიცხვი იქნება ნაკლები გამოიტანოს ნაკლებია,სწორად დასმის შემტხვევაში კი დაწეროს ალერტით გილოცავ```

function guessingnumber() {
    let user = prompt("Enter number from 1 t0 100: ")
    let randomNumber = Math.floor(Math.random()*100)

    while (user !== randomNumber) {
        if (user > randomNumber) {
            user = prompt("Try once again!")
        } else if(user < randomNumber)
            user = prompt("Try once again")
    }

    alert("Congrats!")
}