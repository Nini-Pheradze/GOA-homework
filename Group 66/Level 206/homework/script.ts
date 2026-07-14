// 2) შექმენით Student ტიპი (name, age, isActive), შექმენით მინიმუმ 5 სტუდენტის მასივი და for ციკლის გამოყენებით დაბეჭდეთ ყველა სტუდენტის სახელი, მხოლოდ აქტიური სტუდენტები და დათვალეთ, რამდენი აქტიური სტუდენტია

type Student = { 
    name: string, 
    age: number, 
    isActive: boolean
};

const students: Student[] = [
    { name: "გიორგი", age: 20, isActive: true },
    { name: "ნინო", age: 22, isActive: false },
    { name: "ლუკა", age: 19, isActive: true },
    { name: "ანა", age: 21, isActive: false },
    { name: "დავითი", age: 23, isActive: true }
];

let activeCount = 0;

for (let i = 0; i < students.length; i++) {
    console.log(students[i]?.name);
};


for (let i = 0; i < students.length; i++) {
    if (students[i]?.isActive) {
        console.log(students[i]?.isActive);
        activeCount++;
    }
};


//  შექმენით enum Category (Electronics, Clothes, Food, Books) და Product ტიპი (name, price, category, inStock), შექმენით მინიმუმ 6 პროდუქტის მასივი და for ციკლის გამოყენებით დაბეჭდეთ მხოლოდ მარაგში არსებული პროდუქტები, გამოთვალეთ ყველა პროდუქტის ჯამური ფასი და იპოვეთ ყველაზე ძვირი პროდუქტი.

enum Category {
    Electronics, 
    Clothes, 
    Food, 
    Books
};

type Product = {
    name: string,
    price: number, 
    category: Category, 
    inStock: boolean
};

let products: Product[] = [
    { name: "Laptop", price: 2500, category: Category.Electronics, inStock: true },
    { name: "T-Shirt", price: 45, category: Category.Clothes, inStock: true },
    { name: "Apple", price: 3, category: Category.Food, inStock: false },
    { name: "JS Guide Book", price: 60, category: Category.Books, inStock: true },
    { name: "Smartphone", price: 1200, category: Category.Electronics, inStock: false },
    { name: "Jeans", price: 90, category: Category.Clothes, inStock: true }
];

let TotalPrice = 0;
let mostExpensive = products[0];

for (let i = 1; i < products.length; i++) {
    if (products[i]!.price > mostExpensive!.price) {
        mostExpensive = products[i];
    }
}

console.log(`Most expensive product: ${mostExpensive!.name} ($${mostExpensive!.price})`);

for (let i = 0; i < products.length; i++) {
    TotalPrice += products[i]!.price;
};

console.log(`Total price: ${TotalPrice}`);


for (let i = 0; i < products.length; i++) {
    if (products[i]?.inStock){
        console.log(products[i]?.name);
    };
};



// შექმენით Employee ტიპი (id, name, salary, department), შექმენით თანამშრომლების მასივი და for ციკლის გამოყენებით იპოვეთ ყველაზე მაღალი ხელფასი, გამოთვალეთ საშუალო ხელფასი და დაბეჭდეთ მხოლოდ იმ თანამშრომლების სახელები, რომელთა ხელფასი 3000-ზე მეტია.

type Employee = {
    id: number,
    name: string, 
    salary: number, 
    department: string
};

let employees : Employee[] = [
    { id: 1, name: "გიორგი", salary: 2500, department: "IT" },
    { id: 2, name: "ანი", salary: 4200, department: "Marketing" },
    { id: 3, name: "ლუკა", salary: 3500, department: "Finance" },
    { id: 4, name: "ნინო", salary: 1800, department: "HR" },
    { id: 5, name: "დათო", salary: 3100, department: "IT" }
];


let highestSalary = employees[0]!.salary;
let totalSalary = employees[0]!.salary;

for (let i = 0; i < employees.length; i++) {
    if (employees[i]!.salary > highestSalary) {
        highestSalary = employees[i]!.salary;
    };
    totalSalary += employees[i]!.salary
};

console.log(`Highest salary is ${highestSalary}.`);

for (let i = 0; i < employees.length; i++) {
    if (employees[i]!.salary > 3000) {
        console.log(`Person whose salary is more than 3000, is ${employees[i]!.name}`);
    };
};

let avarageSalary = totalSalary / employees.length;

console.log(`These people avarage salary is ${avarageSalary}`);



// შექმენით enum Rank (Bronze, Silver, Gold, Platinum) და Player ტიპი (username, level, rank, online), შექმენით მინიმუმ 7 მოთამაშის მასივი და for ციკლის გამოყენებით დაბეჭდეთ მხოლოდ ონლაინ მოთამაშეები, დათვალეთ, რამდენი Gold მოთამაშეა და იპოვეთ ყველაზე მაღალი დონის (level) მოთამაშე.

enum Rank {
    Bronze, 
    Silver, 
    Gold, 
    Platinum
};

type Player = {
    username: string, 
    level: number, 
    rank: Rank, 
    online: boolean
};

let players: Player[] = [
    { username: "ShadowHunter", level: 45, rank: Rank.Bronze, online: true },
    { username: "Neo_Tbilisi", level: 92, rank: Rank.Platinum, online: true },
    { username: "GoldDigger", level: 55, rank: Rank.Gold, online: false },
    { username: "CyberKnight", level: 12, rank: Rank.Silver, online: true },
    { username: "Phoenix", level: 78, rank: Rank.Gold, online: true },
    { username: "Alpha_99", level: 105, rank: Rank.Platinum, online: false },
    { username: "GamerGG", level: 34, rank: Rank.Gold, online: true }
];

for (let i = 0; i < players.length; i++) {
    if (players[i]!.online) {
        console.log(`Active players are ${players[i]!.username}`);
    };
};

let goldPlayer = 0;
let highestLevel = players[0];

for (let i = 0; i < players.length; i++) {
    if (players[i]!.rank === Rank.Gold) {
        goldPlayer ++;
    };

    if (players[i]!.level > highestLevel!.level){
        highestLevel = players[i];
    };
};

console.log(`Highest level player is ${highestLevel!.username} and gold player is ${goldPlayer}`);


// შექმენით type Car (brand, model, year, price, electric), შექმენით მინიმუმ 8 ავტომობილის მასივი და for ციკლის გამოყენებით დაბეჭდეთ მხოლოდ ელექტრო მანქანები, იპოვეთ ყველაზე ძველი მანქანა, გამოთვალეთ ყველა მანქანის საშუალო ფასი და დაბეჭდეთ მხოლოდ ის მანქანები, რომელთა ფასი 30000-ზე მეტია.

type Car = {
    brand: string,
    model: string,
    year: number, 
    price: number,
    electric: boolean
};

const cars: Car[] = [
    { brand: "Tesla", model: "Model S", year: 2022, price: 75000, electric: true },
    { brand: "Toyota", model: "Camry", year: 2015, price: 15000, electric: false },
    { brand: "Nissan", model: "Leaf", year: 2018, price: 18000, electric: true },
    { brand: "BMW", model: "i4", year: 2023, price: 55000, electric: true },
    { brand: "Mercedes-Benz", model: "E-Class", year: 2017, price: 28000, electric: false },
    { brand: "Ford", model: "Mustang", year: 1969, price: 65000, electric: false },
    { brand: "Hyundai", model: "Ioniq 5", year: 2021, price: 42000, electric: true },
    { brand: "Honda", model: "Civic", year: 2012, price: 95000, electric: false }
];


for (let i = 0; i < cars.length; i++) {
    if (cars[i]?.electric) {
        console.log(`Electric car is ${cars[i]!.model}`);
    };
};


let oldestCar = cars[0];
let totalPrice = 0;

for (let i = 0; i < cars.length; i++) {
    if (cars[i]!.year > oldestCar!.year) {
        console.log(`Oldest car is ${cars[i]!.model}`);
    };

    totalPrice += cars[i]!.price;

    if (cars[i]!.price > 30000) {
        console.log(`Car's price which costs more than 30000 is ${cars[i]!.model}`)
    }
};

let avaragePrice = totalPrice / cars.length;

console.log(`Avarage price is ${avaragePrice}`);
