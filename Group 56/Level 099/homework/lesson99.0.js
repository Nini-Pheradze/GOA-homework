// Find the first string in an array that starts with the letter "A".

const words1 = ["Bubble", "Bottle", "Fizzy", "Announcement", "AI"];

const filtered1 = words1.filter(word => word.startsWith("A"))[0];

console.log(filtered1);

// Find the first object in an array of users whose age is over 30.

const ages = [
    {
        name: "Nini", age: 15
    },
    {
        name: "Anna", age: 36
    },
    {
        name: "Mikheil", age: 40
    }
];

const filtered2 = ages.filter(name => name.age >= 30)[0];

console.log(filtered2);


// Find the first word in an array that has more than 5 characters.

const moreThanFive = ["Dig", "Dog", "Awakward", "Reliable", "Delighted"];

const filtered3 = moreThanFive.filter(word => word.length > 5)[0];

console.log(filtered3);


// Find the first product in an array of objects where the price is less than 20.

const prices = [
    {
        item: "Book", price: 20
    },
    {
        item: "Notebook", price: 10
    },
    {
        item: "Diary", price: 18
    },
    {
        item: "Torch", price: 60
    },
    {
        item: "Pen", price: 2
    }
];

const filtered4 = prices.filter(price => price.price < 20)[0];

console.log(filtered4);

// Find the first student object in an array whose grade is "A".

const students = [
    {
        student: "Lali", grade: "B"
    },
    {
        student: "Elene", grade: "B"
    },
    {
        student: "George", grade: "D"
    },
    {
        student: "David", grade: "A"
    }
];

const filtered5 = students.filter(student => student.grade === "A")[0];

console.log(filtered5);