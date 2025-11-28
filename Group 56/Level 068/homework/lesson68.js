// Check if a Number is Positive or Negative
// Ask the user to enter a number.
// Use an if statement to check if it’s positive, negative, or zero, and display a message.
let user = prompt("Enter a number: ");
let num = Number(user);

if (isNaN(num)) {
    alert("That is not a valid number.");
} else{
    if (num > 0){
        alert("Number is positive.");
    } else if (num < 0) {
        alert("Number is negative.");
    }
    else {
        alert("The number is zero");
    }
};

// Check User’s Age for Voting Eligibility

// Ask the user to enter their age.

// If the age is 18 or above, show a message saying “You can vote!”

// Otherwise, show “You are not eligible to vote.”

let userAge = prompt("Enter your age: ");
let age = Number(userAge);

if (isNaN(age)) {
    alert("Please enter a valid number.");
} else{
    if (age >= 18) {
        alert("You can vote!");
    } else{
        alert("You are not eligible to vote.");
    }
}


// Compare Two Numbers

// Ask the user to enter two numbers.

// Use an if...else statement to check which number is larger, or if they are equal, and display a message.

let userNum1 = propmt("Enter a number: ");

let num1 = Number(userNum1);

let userNum2 = prompt("Enter a number: ");

let num2 = Number(userNum2);

if (isNaN(userNum1) || isNaN(userNum2)) {
    alert("Please enter a valid number.");
} else{
    if (userNum1 > userNum2) {
        alert("The first number is larger.");
    } else if (userNum2 > userNum1) {
        alert("The second number is larger.");
    } else {
        alert("Your given numbers are equal.");
    }
}