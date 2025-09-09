// Write a function that checks if a given string starts with "Hello" and returns true or false.

const hello = word => word.startsWith("Hello");

console.log(hello("Hello, Nini!"));
console.log(hello("Here You are!"));

// Create a function that checks if a filename starts with "img_" and returns "Image file" or "Not an image file".

function filename(filename) {
    if (filename.startsWith("img_")) {
        return "Image file";
    } else {
        return "Not an image file";
    }
}

console.log(filename("img_ image"));
console.log(filename("image"));

// Given a sentence, check if it starts with "Once upon"

const sentence = sentence => sentence.startsWith("Once upon");

console.log(sentence("Once upon a time."));
console.log(sentence("Time has gone."));

// Write a function that checks if a string starts with a specific substring at a given position.

const string = string => string.startsWith("O");

console.log(sentence("Once upon a time."));
console.log(sentence("Time has gone."));

// Create a function that counts how many names in an array start with "Dr."

const doctors = names => names.filter(name => name.startsWith("Dr.")).length;

console.log(doctors(["Dr. Smith", "Alice", "Dr. John", "Mr. Brown", "Dr. Strange"])); 
