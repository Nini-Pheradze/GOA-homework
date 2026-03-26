// 2) შექმენით პროექტი CRUD (Create, Read, Update, Delete) operations - ებით, students, თქვენ უნდა შეგეძლოთ ახალი student - ების დამატება, წამოღება, მათი grade, role კუთვნილებების განახლება, და student - ის წაშლა, უნდა შეგეძლოთ მოცემული სტუდენტების grade - ით გაფილტვრა, მაგალითად user types /students?grade=30, გამოგაქვთ ისეთი მოსწავლეების ობიექტები რომლის grade - იც უდრის query - ში ჩაწერილ grade - ს, მოცემული კოდები გადაანაწილეთ შესაბამის folder, file - ებში, და ახსენით თითოეული დეტალი კომენტარების სახით

const express = require('express');
const app = express();
const studentsRouter = require('./routes/students.router');

app.use('/students', studentsRouter);

app.listen(3000, () => {
    console.log("http://localhost:3000")
});


