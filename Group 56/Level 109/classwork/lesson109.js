// საკლასო დავალება:

// შექმენით ფუნქცია, რომელსაც გადაეცემა რიცხვი. ფუნქციამ 2 წამში უნდა დააბრუნოს promise და თუ რიცხვი მეტია 10-ზე, მოახდინოს resolve "resolve" სთრინგით, ხოლო სხვა შემთხვევაში მოახდინოს reject "reject" სთრინგით.

// შემდეგ, შეადგინეთ ასინქრონული ფუნქცია, რომელსაც პარამეტრი არ გადაეცემა. ამ ფუნქციაში ცვლადში უნდა შეინახოთ პირველი ფუნქციის მიერ დაბრუნებული promise ობიექტის resolved მნიშვნელობა და შემდეგ ეს ცვლადი დაბეჭდოთ კონსოლში.

// საბოლოოდ, გამოიძახეთ მეორე ფუნქცია.

function checkNumber(num) {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (num > 10) {
            resolve("resolve");
        } else {
            reject("reject");
        }
    }, 2000);
    });
}


async function handlePromise() {
    try {
        const result = await checkNumber(15);
        console.log(result);
    } catch (error) {
    console.log(error);
    }
}

handlePromise();



