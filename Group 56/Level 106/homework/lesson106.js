// 2) Implement a Promise that simulates a coin flip, resolving with "Heads" or rejecting with "Tails".

const newPromise = new Promise((res, rej) => {
    const random = Math.random();

    if (random < 0.5) {
        res("Heads");
    } else {
        rej("Tails");
    }
});

function successHandler(result) {
    console.log("Success: ", result);
}

function failureHandler(error) {
    console.log("Failure");
}

newPromise.then(successHandler).catch(failureHandler);


// 3) შექმენით promise, სადაც გექნებათ 5 ელემენტიანი სთრინგების მასივი. თქვენი დავალებაა ამ მასივიდან აირჩიოთ random სთრინგი. თუ ამ სთრინგის სიგრძე იქნება ლუწი, მოახდინეთ resolve და არგუმენტად გადაეცით "success", ხოლო სხვა შემთხვევაში მოახდინეთ reject და არგუმენტად გადაეცით "failure".

// შემდეგ, ამ promise-ზე გამოიძახეთ then მეთოდი, რომელსაც გადაცემული ექნება successHandler და failureHandler. ორივე handler-ის დავალებაა, რომ უბრალოდ გადაცემული ინფორმაცია დაბეჭდონ კონსოლში.

const createPromise = arr => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomEl = arr[Math.floor(Math.random() * arr.length)]
            if (randomEl.length % 2 === 0) resolve('resolve')
            else reject('reject')
        }, 1500)
    })
}

createPromise(['a', 'ab', 'abc', 'abcd', 'abcde'])
    .then(
        returnedValue => console.log(returnedValue),
        returnedValue => console.log(returnedValue)
    )