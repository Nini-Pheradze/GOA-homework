// Determine if a number is even or odd.

// Take a number as input.

// Use a conditional statement to check if the number is even or odd.

// Display the result.

let user0 = prompt("Enter a number: ");

user0 = Number(user0)

if (isNaN(user0)) {
    alert("This is not a valid number!");
} else{
    if(user0 % 2 === 0) {
        alert("Number" + " " + user0 + " " + "is even!");
    } else{
        alert("Number" + " " + user0 + " " + "is odd!!!");
    }
};


// Assign a grade based on a score.

// Take a score as input.

// Use conditional statements to assign a grade based on the following:

// 90 and above: Grade A

// 80–89: Grade B

// 70–79: Grade C

// 60–69: Grade D

// Below 60: Fail

// Display the grade.

let grade = prompt("Enter a score: ");

grade = Number(grade);

if (isNaN(grade)){
    alert("This number is not valid!");
} else{
    if(grade >= 90) {
        alert("Grade A");
    } else if (grade > 80 && grade < 89) {
        alert("Grade B");
    } else if (grade > 70 && grade < 79) {
        alert("Grade C");
    } else if (grade > 60 && grade < 69) {
        alert("Grade D");
    } else{
        alert("Fail!")
    }
}


// Determine the largest among three numbers.

// Take three numbers as inputs.

// Use conditional statements to find and display the largest number.

// If numbers are equal, mention it.

let num1 = Number(prompt("Enter the first number:"));
let num2 = Number(prompt("Enter the second number:"));
let num3 = Number(prompt("Enter the third number:"));

if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    alert("Please enter valid numbers.");
} else if (num1 === num2 && num2 === num3){
    alert("All three numbers are equal.");
} else if (num1 === num2 && num2 === num3){
    if (num1 === num2 || num1 === num3){
        alert("The largest number is " + num1 + ", and it appears more than once.");
    } else {
        alert("The largest number is" + " " + num1);
    }
}   else if (num2 >= num1 && num2 >= num3) {
        if (num2 === num3) {
            alert("The largest number is " + num2 + ", and it appears more than once.");
        } else {
            alert("The largest number is " + num2);
        }
    } else {
        alert("The largest number is " + num3);
};



// 5) Check if a character is a vowel or a consonant.

// Take a single character as input.

// Use conditional statements to check if it’s a vowel (a, e, i, o, u) or a consonant.

// Display the result.

let char = propmt("Enter a single letter: ")



//Check if a number is divisible by 3 and 5.

// Take a number as input.

// Use conditional statements to check if it’s divisible by both 3 and 5.

// Display appropriate messages:

// Divisible by both

// Divisible by 3 only

// Divisible by 5 only

// Not divisible by either

let num = Number(propmt("Enter Number: "));





// Check if a person is a child, teenager, adult, or senior based on age.

// Take age as input.

// Use conditional statements to classify:

// 0–12: Child

// 13–19: Teenager

// 20–59: Adult

// 60 and above: Senior

// Display the category.



// Print numbers from 1 to 5.

// Use a while loop to print numbers from 1 to 5, each on a new line.


// Print even numbers from 2 to 10.

// Use a while loop to print even numbers starting from 2 up to 10.


// Print numbers from 10 down to 1.

// Use a while loop to print numbers in reverse from 10 down to 1.


// Print all even numbers between 1 and 20.

// Use a for loop to check and print even numbers from 1 to 20.


// Print the sum of numbers from 1 to 5.

// Use a for loop to add numbers from 1 to 5 and print the final sum.