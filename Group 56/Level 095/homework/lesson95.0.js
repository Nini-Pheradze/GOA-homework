// Check if the word "dog" exists in "The quick brown fox jumps over the lazy dog".


// code is written using indexOf() method

let str0 = "The quick brown fox jumps over the lazy dog";

let searchText0 = "dog";

let indexofFirst = str0.indexOf(searchText0);

console.log(indexofFirst);

// code is written using includes() method

if (str0.includes("dog")) {
    console.log("Yes, it exists.");
} else {
    console.log("No, it doesn't exist.");
}


// Write a function that returns true if a string contains "@" (basic email check).

let str1 = "@gmail.com";

// code is written using includes() method

if (str1.includes("@")) {
    console.log("Yes, it exists.");
} else {
    console.log("No, it doesn't exist.");
}

// code is written using indexOf() method

let searchText1 = "@";

let indexofSecond = str1.indexOf(searchText1);

console.log(indexofSecond);



// Use includes to see if "Java" exists in "JavaScript".

let str2 = "JavaScript";

let searchText2 = "Java";

if (str2.includes(searchText2)) {
    console.log("Yes, it exists.");
} else {
    console.log("No, it doesn't exist.");
}


// Check if "apple" exists in "pineapple".

let str3 = "pineapple";

let searchText3 = "apple";

if (str3.includes(searchText3)) {
    console.log("Yes, it exists.");
} else {
    console.log("No, it doesn't exist.");
}


// Write a function that checks if a sentence contains the word "not".

function ifContainsNot(sentence) {
    if (sentence.includes("not")){
        console.log("Yes, it exists.");
    } else {
        console.log("No, it doesn't exist.");
    }
}

ifContainsNot("We are just friends.");
ifContainsNot("We are not friends.");