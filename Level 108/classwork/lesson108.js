// საკლასო დავალება:

// შექმენით ფუნქცია, რომელსაც ერთი სთრინგი გადაეცემა. ამ ფუნქციამ უნდა დააბრუნოს promise. თუ სთრინგის სიგრძე ლუწია, promise-მა უნდა მოახდინოს resolve და მისი არგუმენტი იყოს თვითონ სთრინგი. ხოლო, თუ სთრინგის სიგრძე კენტია, promise-მა უნდა მოახდინოს reject და არგუმენტად ისევ სთრინგი გადაეცით. 

// ფუნქცია უნდა იყოს ასინქრონული, ამიტომ მასში ჩააშენეთ setTimeout და დროს იყოს 2 წამი.

// გამოიძახეთ Promise.all მეთოდი, მას არგუმენტად გადაეცით მასივი, სადაც იქნება 3 promise თქვენს მიერ შექმნილი ფუნქციიდან. 

// Promise.all-ის მიერ დაბრუნებულ promise-ზე უნდა გაწეროთ როგორც then მეთოდი, ასევე catch მეთოდი. ორივე მეთოდში დაბეჭდეთ დაბრუნებული ინფორმაცია.


function returnPromise(string) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (string.length % 2 === 0) {
                resolve(string);
            } else {
                reject(string);
            }
        }, 2000);
    });
}


const promise1 = returnPromise("Greeting");
const promise2 = returnPromise("Hello");
const promise3 = returnPromise("World");


Promise.all([promise1, promise2, promise3])
.then((results) => {
    console.log(results);
})
.catch((error) => {
    console.log(error);
})




// გადადით მოცემულ ლინკზე და დააკოპირეთ ნებისმიერი API LINK. შემდეგ, js-ის ფაილში გამოიყენეთ fetch ფუნქცია, მას არგუმენტად გადაეცით თქვენს მიერ დაკოპირებული api link. დაბრუნებული ინფორმაცია გადაიყვანეთ JSON ფორმატში და საბოლოოდ დაბეჭდეთ ის.

// https://goa-api.vercel.app/


fetch('https://goa-api.vercel.app/')
    .then(response => response.json())
    .then(res => console.log(res))
    .catch(error => console.log(error))



// js-ის ფაილში გამოიყენეთ fetch ფუნქცია, მას არგუმენტად გადაეცით ქვემოთ მოცემული api link. დაბრუნებული ინფორმაცია გადაიყვანეთ JSON ფორმატში და საბოლოოდ დაბეჭდეთ ის.

// https://fakestoreapi.com/products

fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log(error))