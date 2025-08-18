// Ask the user to enter a math expression (e.g., "5+3"). Use eval() to calculate and show the result

let expression0 = prompt("Enter a math expression: ");

let result0 = eval(expression0);

console.log("Evaluated expression is: ", result0);



// Ask the user to input an expression with parentheses (e.g., "(8+2)*3"). Use eval() to get the correct result.

let expression1 = prompt(" Enter an expression with parentheses: ");

let result1 = eval(expression1);

console.log("Evaluated expression is: ", result1);


// Let the user type a division (e.g., "100/4"). Use eval() to evaluate and show the result.

let user0 = prompt("Please, type a division: ");

let division0 = eval(user0);

console.log("Divided: ", division0);



// Ask the user for a number. Use eval() with "num*num" to calculate the square.

let user1 = prompt("Enter a number: ");

let square0 = eval(user1*user1);

console.log("Square of given number: ", square0);



// Store a math expression as a string variable (e.g., let exp = "20-7";). Use eval(exp) to get the result.

let mathExpression = "100 - 23";

let resultOfExpression = eval(mathExpression);

console.log("Result of given math expression: ", resultOfExpression);



// Ask the user to enter something. Use isNaN() to check if it is a number or not.

let user2 = prompt("Enter any kind of text: ");

let nan = isNaN(user2);

console.log("Given text ", nan);


// Ask the user for their age. If isNaN() returns true, show “Invalid age”, otherwise show “Valid age”.

let user3 = prompt("Enter your age: ");

if (isNaN(user3) === true) {
    console.log("Invalid age");
} else{
    console.log("Valid age");
};


// Prompt the user for two values. Use isNaN() on both and display whether each one is a number or not.

let user4 = prompt("Enter a number: ");
let user5 = prompt("Enter a number: ");

if (isNaN(user4) === true){
    console.log("Invalid age");
} else if (isNaN(user5) === true){
    console.log("Invalid age");
}else{
    console.log("Valid age");
};


// Ask the user to type anything. Use isNaN() to detect if it’s a number (like 123) or text (like "hello").

let user6 = prompt("Type anything: ");

if (isNaN(user6) === true){
    console.log("not a number");
} else{
    console.log(user6);
};


// Ask the user for two numbers and an operator (+, -, *, /). Use isNaN() to ensure both inputs are valid numbers before performing the calculation.

let number1 = prompt("Enter the first number: ");
let number2 = prompt("Enter the second number: ");
let operator0 = prompt("Enter an operator: ");

if (isNaN(number1) || isNaN(number2)) {
    console.log("Invalid input. Please enter valid numbers.");
} else{
    number1 = parseFloat(number1);
    number2 = parseFloat(number2);

    let result;

    if (operator0 = "+") {
        result = number1 + number2;
    } else if (operator0 = "-"){
        result = number1 - number2
    } else if (operator0 = "*"){
        result = number1 * number2
    } else if (operator0 = "/"){
        if (number2 === 0) {
            console.log("Error: Division by zero is not allowed.");
        }else {
            result = num1 / num2;
        }
    } else {
        console.log("Invalid operator. Please use +, -, *, or /.");
    }

    if (result !== undefined) {
        console.log("Result: " + result);
    }
}


// Ask the user to enter a whole number as a string (e.g., "25"). Use parseInt() to convert it to a number.

let user7 = prompt("Enter a whole number as a string: ");

let parseint0 = parseInt(user7);

if (isNaN(parseint0)) {
    console.log("That is not a valid whole number.");
} else {
    console.log("You entered the number: " + parseint0);
};


// Prompt the user for two whole numbers as strings. Convert both using parseInt() and add them.

let num1 = prompt("Enter the first whole number:");
let num2 = prompt("Enter the second whole number:");

let int1 = parseInt(num1);
let int2 = parseInt(num2);

let sum0 = int1 + int2;

alert("The sum is: " + sum0);


// Ask the user to enter "55px". Use parseInt() and check what number is extracted.

let user8 = prompt("Enter '55px': ");

let int3 = parseInt(user8);

console.log(int3);


// Ask the user to enter values like "20px" and "15.9". Use parseInt() on both and add them.

let user9 = prompt("Enter '20px': ");
let user10 = prompt("Enter '15.9': ");

let int4 = parseInt(user9);
let int5 = parseInt(user10);

let sum = int4 + int5;

console.log("Sum of nums: " + sum);


// Ask the user to enter "0xF". Use parseInt() to convert it and display the result.

let user11 = prompt("Enter '0xF': ");

let int6 = parseInt(user11);

console.log(int6);


// Ask the user to enter item prices as strings with decimals (e.g., "19.99", "5.50"). Use parseFloat() to calculate the total.

let user12 = prompt("Enter item prices as strings with decimals: ");
let user13 = prompt("Enter item prices as strings with decimals: ");

let float1 = parseFloat(user12);
let float2 = parseFloat(user13);

let total0 = float1 + float2;

console.log("Sum: " + total0);


// Prompt the user for a bill amount (string like "45.75") and a tip percentage (string like "15"). Use parseFloat() to calculate the tip and total amount.

let user14 = prompt("Enter a bill amount (string like '45.75'): ");
let user15 = prompt("Enter a tip percentage (string like '15'): ");

let float3 = parseFloat(user14);
let float4 = parseFloat(user15);

let tip = (float3 * float4) /100;
let total = float3 + tip;

console.log("Tip: $" + tip + "\nTotal: $" + total);


// Ask the user for a temperature in Celsius as a string (e.g., "36.6"). Use parseFloat() to convert it to Fahrenheit.

let celsiusStr = prompt('Enter the temperature in Celsius (e.g., "36.6"):');

let celsius = parseFloat(celsiusStr);

let fahrenheit = (celsius * 9 / 5) + 32;

alert(celsius + "°C is " + fahrenheit + "°F");


// Prompt the user for weight (string, "70.5") and height in meters (string, "1.75"). Convert with parseFloat() and calculate BMI.

let weight = prompt("Enter your weight: ");
let height = prompt("Enter your height: ");

let weightfloat = parseFloat(weight);
let heightfloat = parseFloat(height);

let bmi = weightfloat / (heightfloat * heightfloat);

alert("Your BMI is: " +  bmi);


// Ask the user for distance traveled (string, "350.7") and fuel used (string, "28.5"). Use parseFloat() to calculate km per liter.

let distanceStr = prompt('Enter the distance traveled in km (e.g., "350.7"):');

let fuelStr = prompt('Enter the fuel used in liters (e.g., "28.5"):');

let distance = parseFloat(distanceStr);
let fuel = parseFloat(fuelStr);

let kmPerLiter = distance / fuel;

alert("Fuel efficiency: " + kmPerLiter + " km/l");
