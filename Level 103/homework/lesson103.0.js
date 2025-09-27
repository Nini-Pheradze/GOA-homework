// შექმენით კალდენარი რომელიც დინამიკურად განახდება ანუ ყოველ 1 წამში და და კონკსრეტულ დროს გვეტყვის ???
// <3
// რენდომის გამოყენება

// შექმენი პროგრამა, რომელიც Math.random()–ით აგენერირებს 1–დან 6–მდე რიცხვს და იმიტირებს კუბიკის აგდებას. 🎲???



// რენდომი და Array

// გქონდეს მასივი ["ვაშლი", "მსხალი", "ბანანი", "ატამი"] და Math.random()–ით აირჩიე რომელიმე შემთხვევითად. 🍏

const array = ["ვაშლი", "მსხალი", "ბანანი", "ატამი"];

const random = Math.floor(Math.random(array) * array.length);

console.log(array[random]);

// Random Password Generator

// გამოიყენე Math.random() და შექმენი შემთხვევითი პაროლი (მაგ: 8 სიმბოლო, შერეული ასოები და ციფრები).

const mix = ["a", 1, 2, "b", "c", "d", 3, 4];

const randomElement = Math.floor(Math.random(mix) * mix.length);

console.log(mix[randomElement]);

// თარიღის ობიექტი (Date)

// გამოიტანე მიმდინარე თვე ტექსტურად: "სექტემბერი" "ოქტომბერი" და ა.შ.

const month = new Date();

const currentMonth = month.getMonth()

console.log(currentMonth);

// გამოიტანე კვირის დღე "ორშაბათი" "სამშაბათი" და ა.შ.

const day = new Date().getDay();

console.log(day);

// Birthday Countdown

// მომხმარებელი შეიყვანს თავის დაბადების დღეს და Date ობიექტით გამოთვალე რამდენი დღე დარჩა მის დაბადების დღემდე. 🎂

const birthdayMonth = 6;
const BirthdayDate = 8;

const currentTime = new Date();
const currentMonth1 = currentTime.getMonth() +1;
const currentDate = currentTime.getDate();

let sumOfDays = 0;

if (currentMonth1 < birthdayMonth) {
    sumOfDays += 30 - currentDate;

    sumOfDays += (birthdayMonth - currentMonth1)*30;

    sumOfDays += BirthdayDate;
} else {
    sumOfDays += (12 - currentMonth1) * 30;

    sumOfDays += (birthdayMonth -1) * 30;

    sumOfDays += BirthdayDate;
}

console.log(sumOfDays);



// Stopwatch with Date

// გამოიყენე Date.now() რომ დათვალო რამდენი წამი გავიდა ღილაკზე დაკლიკებიდან.???





// Random Color Generator

// Math.random()–ით შექმენი შემთხვევითი ფერი RGB ფორმატში, მაგ: "rgb(123, 45, 200)". 🎨 ???