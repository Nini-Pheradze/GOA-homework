
// ``` გააკეთეთ რანდომ რიცხვი 1 დან 100 ის ჩათვლით.prompt-ის საშულებით თქვენ უნდა შეიყვანოთ რიცხვი და ეცადოთ გამოიცნოთ რანდომ რიცხვი.თუ თქვენი ჩაწერილი იქნება მეტი ვიდრე random გამოიტანსოს მეტია,თუ თქვენი რიცხვი იქნება ნაკლები გამოიტანოს ნაკლებია,სწორად დასმის შემტხვევაში კი დაწეროს ალერტით გილოცავ```

let randomNum = Math.round(Math.random() * 100);

while (true) {
    let userNum = Number(prompt("შეიყვანეთ სასურველი რიცხვი"));

    if (userNum > randomNum) {
    alert("მეტია");
} else if (userNum < randomNum) {
    alert("ნაკლებია");
} else {
    alert("ტოლია");
    break; // Stop the loop when guessed correctly
    }
}