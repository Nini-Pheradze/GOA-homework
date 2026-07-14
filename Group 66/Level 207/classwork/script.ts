// 1) შექმენით 2 enum სადაც ერთში მნიშვნელობები გექნებათ 2 დან დაწყებული და მეორეში მხოლოდ სტრინგები შემდეგ კი მიანიჭეთ შექმნილი enum ტიპი ცვლადს

enum User {
    surname = 2,
    firstname,
    age,
    isActive
};

enum Product {
    description = 2,
    category,
    inroduceCountry
};

// 2) შექმენით საკუთაი ტიპი რომელიც იქნება დატვირთული მაგალითად მასივები ობიექტები და სხვა დანარჩენი ტიპების ერთიანობა, შემდეგ შექმენით ცვლადი და მიანიჭეთ შექმნილი ტიპი

type Developer_Profile = {
    id: number,
    fullname: string,
    skills: string[],
    experianceYears: number,
    level: string,
    contactInfo: {
        email: string,
        github?: string
    };
};

const developer: Developer_Profile = {
    id: 1,
    fullname: "Nini Pheradze",
    skills: ['HTML', 'CSS', 'JAVASCRIPT', 'PYTHON', 'TYPESCRIPT'],
    experianceYears: 2,
    level: "Middle",
    contactInfo:{
        email: 'peradze@n1gmail.com',
        github: 'https://github.com/Nini-Pheradze'
    }
};

// 3) ახსენით რა არის type და enum და აგრეთვე მოიყვანეთ მაგალითი სად შეიძლება დაგვჭირდეს

// Enum არის მუდმივების (constants) ერთობლიობა, რომელსაც აქვს სახელი. ის გვეხმარება, რომ კოდში არ გამოვიყენოთ გაუგებარი რიცხვები ან სტრინგები (ე.წ. "Magic values") და ჩავანაცვლოთ ისინი გასაგები სიტყვებით.
// JavaScript-ს არ აქვს ჩაშენებული Enum-ები, ამიტომ TypeScript კომპილაციის დროს მათ სპეციალურ ობიექტებად გარდაქმნის.

// Type არის TypeScript-ის საშუალება, რომლითაც ჩვენ შეგვიძლია შევქმნათ ახალი სახელი ნებისმიერი ტიპისთვის. ეს შეიძლება იყოს მარტივი ტიპი, ობიექტის სტრუქტურა, მასივი ან თუნდაც რამდენიმე ტიპის გაერთიანება. type არსებობს მხოლოდ დეველოპმენტის დროს და კომპილაციის შემდეგ JavaScript კოდში საერთოდ ქრება.
