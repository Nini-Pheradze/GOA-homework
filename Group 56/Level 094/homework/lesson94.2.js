// Check if the string "Hello World" ends with "World".

const str0 = "Hello World";
console.log(str0.endsWith("World"));

// Verify if the string "filename.pdf" ends with ".pdf".

const str1 = "filename.pdf";
console.log(str1.endsWith("pdf"));

// Use endsWith() to test whether "https://example.com/" ends with "/".

const str2 = "https://example.com/";
console.log(str2.endsWith("/"));

// Write a function that returns true if a word ends with "s".

function endsWithS(word) {
    return word.endsWith("s");
}

console.log(endsWithS("cats")); 
console.log(endsWithS("dog"));  

// Use the optional length parameter in endsWith() to check if "JavaScript" ends with "Java" considering only the first 4 characters.

let str3 = "Javascript";
let result = str3.endsWith("Java", 4);
console.log(result);