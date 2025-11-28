// html-ში შექმენით ერთი form, სადაც გექნებათ ერთმანეთთან დაკავშირებული label და input. ფორმას ბოლოში გაუწერეთ დადასტურების ღილაკი.

// როდესაც ფორმა დადასტურდება (onsubmit ატრიბუტი), უნდა გამოიძახოთ ფუნქცია, რომელიც წამოიღებს ინფუთის მნიშვნელობას (.value) და კონსოლში გამოიტანს მას.

// კოდი ისე დაწერეთ, რომ ფორმის დადასტურებისას ვებსაიტი არ დარეფრეშდეს

function userName(user)  {
    user.preventdefault();
    let input = document.getElementById("username").value;

    console.log(input.value)

    input.value = "";
}

userName(user)

// შექმენით ფუნქცია სახელად concStrings. ფუნქციაში უნდა გქონდეთ ორი ცვლადი და ორივეში შეინახეთ prompt-ით შემოტანილი ინფორმაცია. საბოლოოდ დაბეჭდეთ ამ ორი ცვლადის კონკატინაციის შედეგი alert box-ში

function concStrings() {
    let a = prompt("Enter 1st word: ")
    let b = prompt("Enter 2nd word: ")
    let result = a + b
    alert("Result of Concatination: ", result)
}

concStrings()