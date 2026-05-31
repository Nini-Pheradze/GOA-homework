// 1) შექმენით AI დახმარებით 20 ელემნტიანი პროდუქტების მასივი, სადაც გექნებათ კატეგორიის კუთვნილებაა, თქვენი დავალებაა შექმნათ მაპი სადაც გექნებათ ინდექსები გაკეთებული

const { diffIndexes } = require("../../Level 157/homework/Social Book/server/models/user.model");

const products = [
    {
        "id": 1,
        "name": "iPhone 15",
        "price": 1200,
        "category": "Electronics"
    },
    {
        "id": 2,
        "name": "Samsung TV",
        "price": 900,
        "category": "Electronics"
    },
    {
        "id": 3,
        "name": "Nike Air Max",
        "price": 180,
        "category": "Fashion"
    },
    {
        "id": 4,
        "name": "Adidas Hoodie",
        "price": 75,
        "category": "Fashion"
    },
    {
        "id": 5,
        "name": "Wooden Desk",
        "price": 250,
        "category": "Furniture"
    },
    {
        "id": 6,
        "name": "Office Chair",
        "price": 150,
        "category": "Furniture"
    },
    {
        "id": 7,
        "name": "Coffee Maker",
        "price": 60,
        "category": "Home Appliances"
    },
    {
        "id": 8,
        "name": "Blender",
        "price": 45,
        "category": "Home Appliances"
    },
    {
        "id": 9,
        "name": "Harry Potter Book",
        "price": 20,
        "category": "Books"
    },
    {
        "id": 10,
        "name": "JavaScript Guide",
        "price": 35,
        "category": "Books"
    },
    {
        "id": 11,
        "name": "Football",
        "price": 30,
        "category": "Sports"
    },
    {
        "id": 12,
        "name": "Tennis Racket",
        "price": 110,
        "category": "Sports"
    },
    {
        "id": 13,
        "name": "Gaming Mouse",
        "price": 55,
        "category": "Gaming"
    },
    {
        "id": 14,
        "name": "Mechanical Keyboard",
        "price": 95,
        "category": "Gaming"
    },
    {
        "id": 15,
        "name": "Lipstick",
        "price": 18,
        "category": "Beauty"
    },
    {
        "id": 16,
        "name": "Face Cream",
        "price": 25,
        "category": "Beauty"
    },
    {
        "id": 17,
        "name": "Dog Food",
        "price": 40,
        "category": "Pets"
    },
    {
        "id": 18,
        "name": "Cat Toy",
        "price": 12,
        "category": "Pets"
    },
    {
        "id": 19,
        "name": "Mountain Bike",
        "price": 700,
        "category": "Vehicles"
    },
    {
        "id": 20,
        "name": "Car Vacuum Cleaner",
        "price": 50,
        "category": "Vehicles"
    }
];


const categoryIndex = new Map();

for (const product of products) {
    const index = categoryIndex.get(product.category) || [];
    categoryIndex.set(product.category, [...index, product]);
};

console.log(categoryIndex);