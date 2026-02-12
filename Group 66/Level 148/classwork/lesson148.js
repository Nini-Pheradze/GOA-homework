// ბაზაზე გადართვა
// use socialmedia;

// 1. insertOne: ამატებს ერთ კონკრეტულ დოკუმენტს.
// პარამეტრები: ერთი ობიექტი {}.
db.posts.insertOne({
    title: "Learning MongoDB Basics",
    author: "Gigi",
    tags: ["tech", "database", "education"],
    likesCount: 15,
    sharesCount: 2,
    years: [2010, 2015, 2022]
});

// 2. insertMany: ამატებს დოკუმენტების მასივს ერთდროულად.
// პარამეტრები: ობიექტების მასივი [{}, {}].
db.posts.insertMany([
    {
        title: "Modern UI Trends",
        author: "Anna",
        tags: ["design", "ui", "creative"],
        likesCount: 50,
        sharesCount: 10,
        years: [2023, 2024]
    },
    {
        title: "JavaScript Pro Tips",
        author: "Nika",
        tags: ["programming", "js", "web"],
        likesCount: 120,
        sharesCount: 25,
        years: [2005, 1998, 2020]
    }
]);