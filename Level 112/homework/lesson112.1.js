// Check Even or Odd:
// Write a program that uses the ternary operator to check if a given number is even or odd, and print "Even" or "Odd".

let num = 12;
console.log(num % 2 === 0 ? "Even" : "Odd");

// Find the Greater Number:
// Use a ternary operator to determine which of two numbers is greater and display the larger one.

let num1 = 11;
let num2 = 8;

let greater = (num1 > num2) ? num1 : num2;

console.log(greater)

// Check Voting Eligibility:
// Use a ternary operator to check if a person is old enough to vote (age ≥ 18). Print "Eligible" or "Not Eligible".

let age = 42;

console.log(age > 18 ? "Eligible" : "Not Eligible");

// Assign Grade:
// Given a score, use a ternary operator to assign "Pass" if the score is ≥ 50, otherwise "Fail".

let score = 78;

console.log(score >= 50 ? "Pass" : "Fail");

// Check for Positive, Negative, or Zero:
// Use nested ternary operators to determine whether a number is positive, negative, or zero.

let number = 23;

console.log(number > 0 ? "Positive" : (number < 0) ? "Negative" : "Zero");