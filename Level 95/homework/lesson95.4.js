// Replace the first occurrence of "cat" with "dog" in "The cat chased the cat".

let str0 = "The cat chased the cat.";

console.log(str0.replace("cat", "dog"));

// Replace "Java" with "Type" in "JavaScript is cool".

let str1 = "JavaScript is cool.";

console.log(str1.replace("Java", "Type"));

// Write a function that replaces the first space " " in a sentence with a hyphen "-".

function replacingSpace(sentence) {
    return sentence.replace(" ", "-");
}

console.log(replacingSpace("The dog"));
console.log(replacingSpace("Here you are!"));

// Replace the first "a" with "@" in "banana".

let str3 = "banana";

console.log(str3.replace("a", "@"));

// Change "2024" to "2025" in "Happy New Year 2024!".

let str4 = "Happy New Year 2024!";

console.log(str4.replace("2024", "2025"));