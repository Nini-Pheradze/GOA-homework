// შექმენით ისეთი ტიპის სიები,რომლებიც დრეს ვისწავლეთ.თითოუელს გაუწერეთ lenght&concat და დაწერეთ თუ რა სხვაობაა თითოეულ სიას შორის

let girlnames = new Array("Nini", "Lali", "Elene");

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