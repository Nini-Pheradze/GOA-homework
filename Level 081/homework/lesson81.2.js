// Use a for...in loop to print all property names (keys) of an object.

let myObj = {
    name: "Nini",
    surname: "Pheradze",
    academy: "GOA"
};

for (let key in myObj) {
    console.log(key);
};

// Use a for...in loop to print all property values of an object.

let values = {
    num1: 1,
    num2: 2, 
    num3: 3
};

for (let value in values) {
    console.log(values[value]);
};

// Use a for...in loop to count the number of properties in an object.

let nums = {
    num1: 10, 
    num2: 20,
    num3: 30,
    num4: 40,
    num5: 50
};

let count = 0;

for (let key in nums) {
    count++;
};

console.log("Count Of Nums: ", count);


// Use a for...in loop to check if a specific key exists in an object.

let aboutMe = {
    name: "Nino",
    surname: "Pheradze",
    age: 15,
    academy: "GOA"
};

let name1 = 'name';
let exist = false;

for (let key in aboutMe) {
    if(key === name1) {
        exist = true;
        break;
    }
}

console.log(`Key "${name1}" exists:`, exist);

// Use a for...in loop to create a string listing all keys from an object.

let cars = {
    Num1: 'Mercedes',
    Num2: 'BMW',
    Num3: 'Audi'
};

let list = ' ';

for (let key in cars) {
    list += key + ' ';
};

console.log('Keys: ', list.trim())