// შექმენით utils ფოლდერი, დაამატეთ ფაილი math.js სადაც შექმენით 4 მათემატიკურ ფუნქციას და დააექსპორტებთ, app ფაილში კი გამოიყენეთ require რომ დააიმპორტოთ ფუნქციები


function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) return "Cannot divide by zero";
    return a / b;
}


module.exports = {add, subtract, multiply, divide};


//  process მოდულის გამოყენებით შექმენით პროგრამა, რომელსაც გაშვებისას გადავცემთ რიცხვებს (რაოდენობა უცნობიოა) მაგ:  node app.js 5 10 7 ... ასშ, თქვენი დავალებაა process მოდულის დახმარებით ეს რიცხვები ამოიღოთ და მათი ჯამი დაბეჭდოთ (აგრეთვე კომენტარებით ახსენით რას ნიშნავს  process)

// მინიშნება: დასერჩეთ node.js arguments from process module/object



// process - Node.js-ის გლობალური ობიექტია,
// რომელიც გვაძლევს ინფორმაციას NODE პროცესის შესახებ
// (სადაც მუშაობს ჩვენი აპლიკაცია).
// process.argv - მასივი, სადაც ინახება ტერმინალიდან გადაცემული არგუმენტები.


// process.env - ობიექტია, რომელიც შეიცავს Environment ცვლადებს.
// ის გამოიყენება კონფიგურაციებისთვის, პაროლებისთვის, api key-ებისთვის და სხვა მნიშვნელობებისთვის.


console.log(process.argv.slice(2).reduce((acc, val) => acc + val * 1, 0))
