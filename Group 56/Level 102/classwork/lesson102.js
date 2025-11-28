// html-ის დოკუმენტში ჩაამატეთ ერთი პარაგრაფი და ერთი ღილაკი.

// ორივე ელემენტი წამოიღეთ js-ში. შემდეგ, შექმენით მასივი, სადაც გექნებათ 5 სთრინგი. როდესაც მომხმარებელი დააკლიკებს ღილაკს, თქვენ მასივიდან ერთ-ერთი random სთრინგი უნდა აირჩიოთ (გამოიყენეთ Math.random მეთოდი) და ეს სთრინგი textContent-ად გაუწეროთ პარაგრაფს.

let par = document.getElementById("par");

let button = document.getElementById("btn");

const str = ["Hello world!", "Welcome", "Programming", "Web Development", "Data Science"];

button.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * str.length);
    par.textContent = str[randomIndex];
});



// html-ის დოკუმენტში ჩაამატეთ პარაგრაფი და ღილაკი. როდესაც მომხარებელი დააკლიკებს ღილაკს, პარაგრაფის textContent უნდა გახდეს დღევანდელი დღე - ამისთვის გამოიყენეთ Date ობიექტი, getDay მეთოდი და მასივი.

let par1 = document.getElementById("par1");

let btn1 = document.getElementById("btn1");

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

btn1.addEventListener("click", () => {
    const today = new Date();
    const dayIndex = today.getDay(); 
    par1.textContent = "დღეს არის: " + days[dayIndex];
    });


// შექმენით ინტერვალი, რომელიც 1 წუთის განმავლობაში, ტერმინალში ყოველ წამს გამოიტანს ახლანდელ დროს შემდეგ ფორმატში: "წელი-თვე-დღე, საათი-წუთი-წამი"

let counter = 0;

let myInterval = setInterval(() => {
    counter++;

    const cd = new Date();
    console.log(`${cd.getFullYear()}-${cd.getMonth() + 1}-${cd.getDate()}, ${cd.getHours()}-${cd.getMinutes()}-${cd.getSeconds()}`);

    if (counter === 60) {
        clearInterval(myInterval);
    }
}, 1000);
