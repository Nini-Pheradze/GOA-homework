// Use at() to get the first character of the string "JavaScript".

const string0 = "Javascript";
console.log(string0.at(0))

// Retrieve the last character of "OpenAI" using a negative index with at().

const string1 = "OpenAI";
console.log(string1.at(-1))

// Access the 5th character of the string "Programming" using at().

const string2 = "Programming";
console.log(string2.at(4))

// Write a function that returns the middle character of any given string using at().

function getMiddleChar(string3) {
    if (!string3) return ""; 
    const midIndex = Math.floor(string3.length / 2);
    let middle = "";

    if (string3.length % 2 === 0) {
        middle = string3.at(midIndex - 1) + string3.at(midIndex);
    } else {
        middle = string3.at(midIndex);
    }
    return middle;
}

console.log(getMiddleChar("hello"));  
console.log(getMiddleChar("worlds")); 
console.log(getMiddleChar("a"));      
console.log(getMiddleChar(""));   

// Use at() to get the second-to-last character of "Hello World".

const string4 = "Hello World";
console.log(string4.at(-2));