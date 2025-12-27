// 1) მოუსმინეთ Post მოთხოვნას '/posts/:id/comments' ბილიკზე, თქვენი დავალებაა, რომ id - ის მიხედვით წამოიღოთ post და comments მასივში დაამატოთ ახალი კომენტარი, ამავდროულად მოცემულ comment - ს უნდა მიანიჭოთ id, უნდა შეგეძლოთ კომენტარების როგორც მთლიანად წამოღება ისე id - ის მიხედვით, აგრეთვე კომენტარის წაშლაც

const express = require("express");
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Server works ✅");
});


const comments = [
    "ძალიან კარგი პოსტია!",
    "საინტერესო ინფორმაცია",
    "მადლობა გაზიარებისთვის",
    "ამ თემაზე მეტი მაგალითი თუ შეიძლება",
    "ყველაფერი გასაგებია",
    "კარგად ახსენი",
    "ველოდები შემდეგ სტატიას"
];

app.get("/comments", (req, res) => {
    res.json(comments);
});



app.post('/posts/:id/comments', (req, res) => {
    const newComment = {
        id: comments.length > 0 ? animals[comments.length - 1].id + 1 : 1
    };

    comments.push(newComment);

    res.status(201).json({
        message: 'კომენტარი წარმატებით დაემატა',
        comment: newComment
    });
});

app.listen(PORT, () => {
    console.log(`Server is running at: http://localhost:${PORT}`);
});

