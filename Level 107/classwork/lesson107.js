// შექმენით ფუნქცია, რომელიც დააბრუნებს promise-ს. promise-ში აიღეთ setTimeout და მის კოდის ბლოკში მიიღეთ random რიცხვი. როდესაც რიცხვი მეტი იქნება 0.5-ზე მოახდინეთ resolve და მას არგუმენტად გადაეცით: "Resolve: {რიცხვი}". ხოლო reject-ის დროს არგუმენტად გადაეცით "Reject: {რიცხვი}".

// საბოლოოდ გამოიძახეთ ფუნქცია და დაბრუნებულ promise-ზე ჯერ გამოიძახეთ then მეთოდი, ხოლო შემდეგ catch. ორივე მეთოდმა უბრალოდ უნდა დაბეჭდოს მიღებული შედეგი.

function getRandomPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        const number = Math.random();

        if (number > 0.5) {
            resolve(`Resolve: ${number}`);
        } else {
            reject(`Reject: ${number}`);
        }
        }, 1000); 
    });
}

getRandomPromise()
    .then(result => console.log(result))
    .catch(error => console.log(error));



// შექმენით ფუნქცია, რომელიც დააბრუნებს promise-ს. ამ promise-მა ყოველთვის resolve უნდა მოახდინოს და resolve-ის არგუმენტი უნდა ჰქონდეს "resolved".

// ამ ფუნქციით შექმენით 3 promise და სამივე გადაეცით Promise.all მეთოდის მასივს.
// შემდეგ გაწერეთ მხოლოდ then მეთოდის გამოძახება და მასში უბრალოდ დაბეჭდეთ დაბრუნებული მნიშვნელობა.

function createPromise() {
    return new Promise((resolve) => {
        resolve("Resolved");
    });
}

const promise1 = createPromise();
const promise2 = createPromise();
const promise3 = createPromise();

Promise.all([promise1, promise2, promise3])
.then((result) => {
    console.log(result);
});



// შექმენით ფუნქცია, სახელად workingOnPromise, რომელსაც გადაეცემა ერთი სთრინგი.

// ფუნქციაში უნდა შეიქმნას promise, რომელიც resolve-ს მაშინ მოახდენს, როდესაც სთრინგის სიგრძე მეტი იქნება 5-ზე, ხოლო სხვა შემთხვევაში მოხდება reject. promise-ში უნდა გქონდეთ ასინქრონული ოპერაცია, ანუ სთრინგის შემოწმება ჩასვით setTimeout-ში.

// თვითონ ფუნქციაშივე promise-ზე გამოიძახეთ then და catch მეთოდები, რომლებიც დაბეჭდავენ დაბრუნებულ ინფორმაციას.

// საბოლოოდ, ფუნქცია გამოიძახეთ 3-ჯერ, განსხვავებული სთრინგებით.

function workingOnPromise(text) {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (text.length > 5) {
                resolve(`Resolve: "${text}" has length ${text.length}`);
            } else {
                reject(`Reject: "${text}" is too short (${text.length})`);
            }
        }, 1000);
    });

    promise
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
}


workingOnPromise("Hello World!");
workingOnPromise("Dog");
workingOnPromise("The cat");
