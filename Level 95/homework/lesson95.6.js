// Extract "world" from "Hello world" using slice.

let str0 = "Hello world";

console.log(str0.slice(6))

// Get the first 4 characters from "JavaScript" using slice.

let str1 = "JavaScript";

console.log(str1.slice(4))

// Remove the first character from "Python" using slice.

let str2 = "Python";

console.log(str2.slice(1))

// Extract the last 3 characters from "Banana" using slice.

let str3 = "Banana";

console.log(str3.slice(-3))

// Write a function that returns the first half of any given string using slice.

function firsthalfOfstr(string) {
    return string.slice(0, Math.floor(string.length / 2));
}

console.log(firsthalfOfstr("Here you are!"))