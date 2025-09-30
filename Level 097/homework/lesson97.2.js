// Write a function that removes extra spaces at the beginning and end of a string using trim().

const word = word => word.trim();

console.log(word("     Kita     "));

// Given a string with leading spaces, use trimStart() to clean it and return the result.

const string = leadingspace => leadingspace.trimStart();

console.log(string("        Nini"))

// Take a string with trailing spaces, clean it using trimEnd(), and return the result.

const trailing = space => space.trimEnd();

console.log(trailing("      George    "))

// Write a function that takes a list of usernames (with random spaces around them) and returns clean usernames without leading or trailing spaces.

function cleanUsernames(usernames) {
    const result = [];
    for (let i = 0; i < usernames.length; i++) {
        result.push(usernames[i].split("").join("").trim());
    }
    return result;
}

const rawUsernames = ["  Alice  ", " Bob", "Charlie  ", "  Dave "]
console.log(cleanUsernames(rawUsernames)); 

// Check whether a user input string is empty after trimming (i.e., contains only spaces).

function isEmptyInput(input) {
    return input.trim() === "";
}

console.log(isEmptyInput("   "));
console.log(isEmptyInput(" Alice "));
console.log(isEmptyInput(""));      
