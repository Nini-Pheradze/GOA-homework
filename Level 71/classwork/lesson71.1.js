
// ``` გააკეთეთ რანდომ რიცხვი 1 დან 100 ის ჩათვლით.prompt-ის საშულებით თქვენ უნდა შეიყვანოთ რიცხვი და ეცადოთ გამოიცნოთ რანდომ რიცხვი.თუ თქვენი ჩაწერილი იქნება მეტი ვიდრე random გამოიტანსოს მეტია,თუ თქვენი რიცხვი იქნება ნაკლები გამოიტანოს ნაკლებია,სწორად დასმის შემტხვევაში კი დაწეროს ალერტით გილოცავ```

function guessingnumber() {
    let user = prompt("Enter number from 1 t0 100: ")
    let randomNumber = Math.floor((Math.random()*10))

    while (user !== randomNumber) {
        if (user > randomNumber) {
            user = prompt("Try once again!")
        } else if(user < randomNumber)
            user = prompt("Try once again")
    }

    alert("Congrats!")
}