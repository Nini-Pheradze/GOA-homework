// Check if a person is a child, teenager, adult, or senior based on age.

// Take age as input.

// Use conditional statements to classify:

// 0–12: Child

// 13–19: Teenager

// 20–59: Adult

// 60 and above: Senior

// Display the category.

let person = parseInt(propmt("Enter your age: "));

if (person <= 12) {
    console.log("You are child");
} else if (person >= 13 && person <= 19) {
    console.log("You are teenager");
} else if (person >= 20 && person <= 59) {
    console.log("You are adult");
} else if (person >= 60){
    console.log("You are senior");
} else{
    console.log("Invalid age entered.");
}