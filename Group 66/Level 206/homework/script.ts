// 2) შექმენით Student ტიპი (name, age, isActive), შექმენით მინიმუმ 5 სტუდენტის მასივი და for ციკლის გამოყენებით დაბეჭდეთ ყველა სტუდენტის სახელი, მხოლოდ აქტიური სტუდენტები და დათვალეთ, რამდენი აქტიური სტუდენტია

const students = [
    { name: "გიორგი", age: 20, isActive: true },
    { name: "ნინო", age: 22, isActive: false },
    { name: "ლუკა", age: 19, isActive: true },
    { name: "ანა", age: 21, isActive: false },
    { name: "დავითი", age: 23, isActive: true }
];


let activeCount = 0;

console.log("ყველა სტუდენტის სახელი");
for (let i = 0; i < students.length; i++) {
    console.log(students[i].name);
}

console.log("მხოლოდ აქტიური სტუდენტები");
for (let i = 0; i < students.length; i++) {
    if (students[i].isActive) {
        console.log(students[i].name);
        activeCount++;
    }
}

console.log("სტატისტიკა");
console.log(`სულ აქტიური სტუდენტია: ${activeCount}`);