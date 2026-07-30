"use strict";
// 2) შექმენით TypeScript პროგრამა, რომელშიც გექნებათ Person ინტერფეისი (name, age) და Student (course, academy) ინტერფეისი, რომელსაც Person ინტერფეისი გააფართოებს (extends). შექმენით ერთი სტუდენტის ობიექტი და დაბეჭდეთ მისი სრული ინფორმაცია.
Object.defineProperty(exports, "__esModule", { value: true });
;
;
const student = {
    name: "Nini Pheradze",
    age: 16,
    course: "Web Development",
    academy: "GOAL-ORINTED ACADEMY"
};
class Dog {
    name;
    sound;
    age;
    constructor(name, sound, age) {
        this.name = name;
        this.sound = sound;
        if (age !== undefined) {
            this.age = age;
        }
    }
    makeSound() {
        console.log(`${this.name} sounds: ${this.sound}`);
    }
}
;
const dog1 = new Dog("Bax", "Woof Woof", 3);
dog1.makeSound();
;
;
;
const user1 = {
    id: 1,
    username: "NINI",
    email: "nini@example.com",
    password: "hashed123!",
    age: 25,
    isActive: true,
    role: "admin",
    phoneNumber: "+995599123456",
    createdAt: new Date("2026-01-15"),
    updatedAt: new Date("2026-07-21"),
    address: {
        city: "Tbilisi",
        street: "Pekini Ave",
        houseNumber: 12,
        country: "Georgia",
        zipCode: "0108"
    },
    profile: {
        firstName: "Nini",
        lastName: "Pheradze",
        avatar: "https://example.com/avatar.jpg",
        bio: "Full-stack Developer",
        birthDate: "2001-05-20"
    },
    settings: {
        theme: "dark",
        language: "ka",
        notifications: true,
        privacy: "public"
    }
};
console.log(user1);
//# sourceMappingURL=script.js.map