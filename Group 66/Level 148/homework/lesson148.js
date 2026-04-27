// შლის მხოლოდ ერთ დოკუმენტს, რომელიც აკმაყოფილებს filter-ს.

db.users.deleteOne({ name: "Nika" })


// შლის ყველა დოკუმენტს, რომელიც აკმაყოფილებს filter-ს.

db.users.deleteMany({ age: { $lt: 18 } })


// ცვლის მთლიან დოკუმენტს (არა მხოლოდ ველებს!)

db.users.replaceOne(
    { name: "Nika" },              // filter
    { name: "Nika", age: 25 }      // ახალი დოკუმენტი
)


