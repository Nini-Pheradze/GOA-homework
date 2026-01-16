/*
    Router პასუხისმგებელია URL-ებისა და HTTP მეთოდების მართვაზე
    ის აკავშირებს route-ს controller-ის შესაბამის ფუნქციასთან
*/

const express = require("express");
const router = express.Router();

const {
    getStudents,
    addStudent,
    updateStudent,
    deleteStudent
} = require("../controllers/students.controller");

// ყველა სტუდენტის წამოღება
// ასევე grade-ით ფილტრაცია (?grade=30)
router.get("/", getStudents);

// ახალი სტუდენტის დამატება
router.post("/", addStudent);

// სტუდენტის განახლება (grade, role)
router.put("/:id", updateStudent);

// სტუდენტის წაშლა
router.delete("/:id", deleteStudent);

module.exports = router;
