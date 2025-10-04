// Implement a Promise that simulates a coin flip, resolving with "Heads" or rejecting with "Tails".

function flipCoin() {
    return new Promise((resolve, reject) => {
        const result = Math.random() < 0.5 ? "Heads" : "Tails";

        if (result === "Heads") {
            resolve("Heads");
        } else {
            reject("Tails");
        }
    });
}

console.log(flipCoin());


// შექმენით promise, სადაც გექნებათ 5 ელემენტიანი სთრინგების მასივი. თქვენი დავალებაა ამ მასივიდან აირჩიოთ random სთრინგი. თუ ამ სთრინგის სიგრძე იქნება ლუწი, მოახდინეთ resolve და არგუმენტად გადაეცით "success", ხოლო სხვა შემთხვევაში მოახდინეთ reject და არგუმენტად გადაეცით "failure".

// შემდეგ, ამ promise-ზე გამოიძახეთ then მეთოდი, რომელსაც გადაცემული ექნება successHandler და failureHandler. ორივე handler-ის დავალებაა, რომ უბრალოდ გადაცემული ინფორმაცია დაბეჭდონ კონსოლში.