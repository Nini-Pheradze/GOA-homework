// 2) შექმენით ფილმების ვებსაიტი, სადაც მთავარ გვერდზე თითოეული ფილმისთვის გექნებათ რაიმე მარტივი div ბლოკი. ფილმების ინფორმაციები, რა თქმა უნდა, უფასო API ლინკით წამოიღეთ, ხოლო ასინქრონული კოდი js-ში წერეთ async და await keyword-ების გამოყენებით. არ გამოიყენოთ then და catch მეთოდები.

// ფილმების უფასო API ლინკის პოვნა თქვენით მოგიწევთ, თუ ვერ იპოვით AI-ს კითხეთ

const container = document.getElementById("movies-container");

async function getMovies() {
    const response = await fetch("https://api.sampleapis.com/movies/action");
    const movies = await response.json();

    movies.slice(0, 10).forEach(movie => {
        const card = document.createElement("div");
        card.classList.add("movie-card");

        const img = document.createElement("img");
        img.src = movie.posterURL;
        img.alt = movie.title;

        const title = document.createElement("h3");
        title.textContent = movie.title;

        const year = document.createElement("p");
        year.textContent = `Year: ${movie.year}`;

        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(year);

        container.appendChild(card);
    });
}

getMovies();




// 3) შედით jsonplaceholder.com-ზე და მოცემული api link დააკოპირეთ. შემდეგ ეს ლინკი გადაეცით fetch ფუნქციას და საბოლოოდ დაბრუნებული ინფორმაცია დაბეჭდეთ.

// ეს ყველაფერი შეასრულეთ async და await keyword-ების გამოყენებით


async function getData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    console.log(data);
}

getData()