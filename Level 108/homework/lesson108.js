// 3) შედით jsonplaceholder.com-ზე და მოცემული api link დააკოპირეთ. შემდეგ ეს ლინკი გადაეცით fetch ფუნქციას და საბოლოოდ დაბრუნებული ინფორმაცია დაბეჭდეთ.

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(rej => console.log(rej))


// 4) შედით https://goa-api.vercel.app/-ზე და ნებისმიერი api link დააკოპირეთ. შემდეგ ეს ლინკი გადაეცით fetch ფუნქციას და საბოლოოდ დაბრუნებული ინფორმაცია დაბეჭდეთ.

fetch('https://goa-api.onrender.com/mentors?limit=5')
    .then(res => res.json())
    .then(resolve => console.log(resolve))
    .catch(err => console.log(err))