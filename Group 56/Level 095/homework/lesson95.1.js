// Find the index of "fox" in the string "The quick brown fox jumps over the lazy dog".

let str0 = "The quick brown fox jumps over the lazy dog";

let word0 = "fox";

console.log(str0.indexOf(word0));

// Write a program that returns the index of the first "o" in "Hello world".

let str2 = "Hello world";

let letter0 = "o";

console.log(str2.indexOf(letter0));

// Use indexOf to find the position of "2025" in "Happy New Year 2025!".

let str3 = "Happy New Year 2025!";

let number0 = "2025";

console.log(str3.indexOf("2025"))

// Find the index of "is" in "This is a simple test".

let str4 = "This is a simple test";

let word1 = "is";

console.log(str4.indexOf(word1));

// Write a function that checks if "@" exists in a string and returns its index, or -1 if not found.


function ExistIndex(str5) {
    return str5.indexOf("@");
}


console.log(ExistIndex("@gmail.com"));