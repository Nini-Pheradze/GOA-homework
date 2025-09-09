// Create a function that checks if every student in an array of objects has passed (score >= 50).

const allPassed = studenst => studenst.every(s => s.score >= 50);

console.log(allPassed([
    {
        name:"Alice",score:70
    },
    {
        name:"Bob",score:55
    },
    {
        name:"Charlie",score:40
    }
]));


// Check if all numbers in an array are even.

const allEven = arr => arr.every(num => num % 2 === 0);

console.log(allEven([2, 4, 6, 8])); 
console.log(allEven([2, 3, 4]));    


// Write a function that ensures all email addresses in an array contain "@".

const allEmail = email => email.every(email => email.includes("@"));

console.log(allEmail(["alice@example.com", "bob@gmail.com", "charlie#mail.com"]));

// Given an array of ages, verify that everyone is at least 18.

const allAdults = ages => ages.every(age => age >= 18);

console.log(allAdults([23, 45, 12, 2, 5]));

// Check if all prices in an array are below 100.

const bellowHundred = prices => prices.every(price => price <= 100);

console.log(bellowHundred([55, 45, 34, 200]));