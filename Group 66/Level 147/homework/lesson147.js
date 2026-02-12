/* 1. insertOne(document):
რას აკეთებს: კოლექციაში ამატებს ერთ კონკრეტულ დოკუმენტს (ობიექტს). პარამეტრები: იღებს ერთ ობიექტს {}.

2. insertMany([documents]):- რას აკეთებს: კოლექციაში ამატებს რამდენიმე დოკუმენტს ერთდროულად.
პარამეტრები: იღებს ობიექტების მასივს [{}, {}, ...].

3. updateOne(filter, update): რას აკეთებს: პოულობს პირველსავე დოკუმენტს, რომელიც ფილტრს ემთხვევა და ანახლებს მას.
პარამეტრები: 
        ა) ფილტრი: რომელი დოკუმენტი მოძებნოს (მაგ: { _id: ... }).
        ბ) განახლება: რა შეიცვალოს (მაგ: { $set: { key: value } }).
*/

// use socialmedia;

// დავალება 1: პოსტის დაბრუნება, რომელიც შეიცავს "design" და "ui" თეგებს
db.posts.find({ tags: { $all: ["design", "ui"] } });


// დავალება 3: ერთი ახალი პოსტის დამატება
db.posts.insertOne({
    title: "Learning MongoDB",
    author: "Gigi",
    tags: ["tech", "database"],
    likesCount: 10
});


// დავალება 4: ორი დოკუმენტის ერთდროულად დამატება
db.posts.insertMany([
    {
        title: "Express.js Basics",
        author: "Nika",
        tags: ["backend", "javascript"],
        sharesCount: 5
    },
    {
        title: "UI Design Trends",
        author: "Anna",
        tags: ["design", "ui", "colors"],
        sharesCount: 12
    }
]);