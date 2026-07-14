"use strict";
// 2) შექმენით Student ტიპი (name, age, isActive), შექმენით მინიმუმ 5 სტუდენტის მასივი და for ციკლის გამოყენებით დაბეჭდეთ ყველა სტუდენტის სახელი, მხოლოდ აქტიური სტუდენტები და დათვალეთ, რამდენი აქტიური სტუდენტია
const cars = [
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
        console.log(`Electric car is ${cars[i].model}`);
    }
    ;
}
;
let oldestCar = cars[0];
let totalPrice = 0;
for (let i = 0; i < cars.length; i++) {
    if (cars[i].year > oldestCar.year) {
        console.log(`Oldest car is ${cars[i].model}`);
    }
    ;
    totalPrice += cars[i].price;
    if (cars[i].price > 30000) {
        console.log(`Car's price which costs more than 30000 is ${cars[i].model}`);
    }
}
;
let avaragePrice = totalPrice / cars.length;
console.log(`Avarage price is ${avaragePrice}`);
