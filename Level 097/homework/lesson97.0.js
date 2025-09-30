// Split the string "2025-08-17" into an array of year, month, and day.

const str0 = "2025-08-17";

const nums = str0.split("-");

console.log(nums);

const year = nums[0];
const month = nums[1];
const day = nums[2];

console.log(year, month, day);

// Split "one two three four five" into an array of words.

const str1 = "one two three four five";

const  splited = str1.split(" ");

console.log(splited);

// Split the string "John,Doe,25,Developer" into an array of values.

const str2 = "John,Doe,25,Developer";

const values = str2.split(",");

console.log(values);

// Split the string "abc" into an array of single characters.

const str3 = "abc";

const chars = str3.split("");

console.log(chars);

// Split "JavaScript is fun" into an array of words and access the second word.

const str4 = "JavaScript is fun";

const words = str4.split(" ");

console.log(words);

const secondWord = words[1];

console.log(secondWord);