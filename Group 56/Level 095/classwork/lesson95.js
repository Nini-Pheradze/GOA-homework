// Find the index of the first occurrence of "a" in the string "banana". Output the index of second occurence of "a".

let str0 = "banana";
let firstindex = str0.indexOf("a");
console.log(firstindex)


let secondIndex = str0.indexOf("a", 2);
console.log(secondIndex);


// Check if the substring "world" exists in "Hello world" using indexOf.

let str1 = "Hello world";

if(str1.indexOf("world") !== -1) {
    console.log("it is there")
} else{
    console.log("It is not there")
}


// Replace the word "cat" with "dog" in the string "The cat is sleeping".

let sentence = "The cat is sleeping";
let replace = sentence.replace("cat", "dog");
console.log(replace)


// Replace the first occurrence of "a" with "@" in "banana".

let word = "banana";
let replaced = word.replace("a", "@");
console.log(replaced);


// Write a program to replace "world" with "JavaScript" in "Hello world".

let greeting = "Hello world";
let replacedGreeting = greeting.replace("world", "Javascript");
console.log(replacedGreeting);


// Extract the word "world" from "Hello world" using slice.

let text1 = "Hello World"
let slice1 = text1.slice(0, 6);

console.log(slice1);


// Get the first 5 characters from "JavaScript is fun" using slice.

let text2 = "JavaScript is fun";
let slice2 = text2.slice(0, 5);

console.log(slice2);


// Use slice to remove the first character from "Python".

let text3 = "Python";
let slice3 = text3.slice(1)

console.log(slice3);