// Check if a character is a vowel or a consonant.

// Take a single character as input.

// Use conditional statements to check if it’s a vowel (a, e, i, o, u) or a consonant.

// Display the result.

function isVowel() {
    let chat = prompt("Enter one chahracter: ");
    let vowels = "aeiouAEIOU";

    if (vowels.includes(char)){
        console.log("Character is vowel.");
    } else {
        console.log("Character is consonant.")
    }
}

isVowel()