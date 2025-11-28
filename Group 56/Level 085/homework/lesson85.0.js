// Create a function that prints all the arguments passed to it using a loop.

function printingArguments() {
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
};

printingArguments("Mercedes-Benz", 20, 10, "Pheradze");


// Write a function that counts how many arguments were passed and prints the count.

function NumberOfArguments() {
    console.log("Number of arguments is ", arguments.length);
};

NumberOfArguments(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);


// Make a function that adds all numeric arguments together and prints the total.

function total() {
    let total = 0;

    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] === "number") {
            total += arguments[i];
        }
    }

    console.log(total);
};

total(1, 2, 3, 4, 5);



// Create a function that stops printing arguments when it finds the value 0, using a break.

function valueofZero() {
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] === 0) {
            break;
        }

        console.log(arguments[i]);
    }
};

valueofZero(1, 2, 3, 0, 4, 5);



// Write a function that skips any string argument and only prints numeric ones using a continue.

function onlyNumerics() {
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] === "string") {
            continue;
        }

        console.log(arguments[i]);

    }
};

onlyNumerics(1, 2, 3, 4, "Nino", 5, 6, 7, 8, 9);