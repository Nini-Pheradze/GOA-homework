// Make an object with 3 properties and check if one of them exists.

const country = {
    name: "Georgia",
    capitalCity: "Tbilisi",
    populity: 3000000
};

console.log(Object.hasOwn(country, "populity"));


// Check if a property that does not exist is owned by the object.

console.log(Object.hasOwn(country, "prop"));

// Create an object and test if "toString" is its own property.

console.log(Object.hasOwn(country, "toString"));

// Add a new property to an object and check it with Object.hasOwn().

country.region = 12;
console.log(Object.hasOwn(country, "region"))

// Delete a property from an object and confirm it no longer exists.

delete country.populity;
console.log(Object.hasOwn(country, 'populity'));
console.log(country)