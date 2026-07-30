// 2) შექმენით TypeScript პროგრამა, რომელშიც გექნებათ Person ინტერფეისი (name, age) და Student (course, academy) ინტერფეისი, რომელსაც Person ინტერფეისი გააფართოებს (extends). შექმენით ერთი სტუდენტის ობიექტი და დაბეჭდეთ მისი სრული ინფორმაცია.

interface Person {
    name: string;
    age: number;
};

interface Student extends Person {
    course: string;
    academy: string;
};


const student: Student = {
    name: "Nini Pheradze",
    age: 16,
    course: "Web Development",
    academy: "GOAL-ORINTED ACADEMY"
};


// console.log(`This student is ${student.name}, she is ${student.age}, she studies ${student.course} in ${student.academy}`);


// 3) შექმენით TypeScript პროგრამა, რომელშიც გექნებათ Animal ინტერფეისი (name, sound და optional age კუთვნილება). შექმენით Dog კლასი, რომელიც Animal ინტერფეისს განახორციელებს (implements) და დაამატეთ makeSound() მეთოდი, რომელიც დაბეჭდავს ცხოველის ხმას. შექმენით რამდენიმე ძაღლის ობიექტი, მათ შორის ისეთი, რომელსაც ასაკი არ ექნება მითითებული.

interface Animal {
    name: string;
    sound: string;
    age?: number;
}

class Dog implements Animal {
    name: string;
    sound: string;
    age?: number;

    constructor(name: string, sound: string, age?: number) {
        this.name = name;
        this.sound = sound;
        if (age !== undefined) {
            this.age = age;
        }
    }

    makeSound(): void {
        console.log(`${this.name} sounds: ${this.sound}`);
    }
};

const dog1 = new Dog("Bax", "Woof Woof", 3);

dog1.makeSound();


// 4) შექმენით ერთი User-ის interface-ი, რომელიც იქნება ძალიან დატვირთული, ჰქონდეს შემდეგი კუთვნილებები: id, username, email, password, age, isActive, role, phoneNumber, createdAt და updatedAt. ასევე შექმენით მასში ჩაშენებული (nested) ობიექტები: address, რომელსაც ექნება city, street, houseNumber, country და zipCode; profile, რომელსაც ექნება firstName, lastName, avatar, bio და birthDate; ასევე settings, რომელსაც ექნება theme, language, notifications და privacy.

// შემდგომ ჩაშენებული ობიექტები გადაანაწილეთ სხვადასხვა interface - ებად და საბოლოოდ შექემნით ერთი user - ის ობიექტი და გამოიტანეთ ტერმინალში.
// 1. ჩაშენებული (Nested) ინტერფეისები

interface Address {
    city: string;
    street: string;
    houseNumber: number | string;
    country: string;
    zipCode: string;
};

interface Profile {
    firstName: string;
    lastName: string;
    avatar: string;
    bio: string;
    birthDate: string;
};

interface Settings {
    theme: "light" | "dark";
    language: string;
    notifications: boolean;
    privacy: "public" | "private" | "friends";
};

interface User {
    id: number;
    username: string;
    email: string;
    password: string;
    age: number;
    isActive: boolean;
    role: "admin" | "user" | "guest";
    phoneNumber: string;
    createdAt: Date;
    updatedAt: Date;
    // nested objects
    address: Address;
    profile: Profile;
    settings: Settings;
}

const user1: User = {
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