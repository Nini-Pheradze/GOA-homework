// Create two strings and use concat() to join them into one.

let string1 = "Hello";
let string2 = "World";

console.log(string1.concat(string2));

// Concatenate three strings together using concat().

let str1 = "NINI";
let str2 = "PHERADZE";
let str3 = "GOA STUDENT";

console.log(str1.concat(str2. str3));

// Use concat() to add a space between two words when joining them.

let word1 = "Strawberry";
let word2 = "Raspberry";
let word3 = "Blueberry";

let result = word1.concat(" ", word2);
console.log(result);


// Use endsWith() to test whether a URL ends with "/".

let url = "https://github.com/Nini-Pheradze/Goa-programming-projects"

console.log(url.endsWith("/"));

// Write a function that checks if a given word ends with the letter "s".

function endswith(word) {
    return word.endsWith("s");
};

console.log(endswith("apple"));
console.log(endswith("pears"));
console.log(endswith("grapes"));

// Write a function that returns true if a sentence ends with punctuation (".", "?", or "!").

function endwithPunctuation(sentence) {
    return sentence.endsWith(".") || sentence.endsWith("?") || sentence.endsWith("!"); 
};

console.log(endwithPunctuation("Hello world!"));
console.log(endwithPunctuation("How you are?"));
console.log(endwithPunctuation("This is me."));