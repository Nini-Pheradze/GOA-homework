/*
    Controller შეიცავს business logic-ს
    აქ არ ვიცით URL-ები
    აქ მხოლოდ ვწერთ რას ვაკეთებთ მონაცემებზე
*/

let students = [
    { id: 1, name: "Nika", grade: 30, role: "student" },
    { id: 2, name: "Mari", grade: 25, role: "student" }
];

// GET /students
// თუ query-ში გადმოგვეცემა grade
// ვფილტრავთ სტუდენტებს grade-ის მიხედვით
const getStudents = (req, res) => {
    const { grade } = req.query;

    if (grade) {
        const filtered = students.filter(
        (s) => s.grade === Number(grade)
        );
        return res.json(filtered);
    }

    res.json(students);
};

// POST /students
// ახალი სტუდენტის დამატება
const addStudent = (req, res) => {
    const { name, grade, role } = req.body;

    const newStudent = {
        id: Date.now(),
        name,
        grade,
        role
    };

    students.push(newStudent);
    res.status(201).json(newStudent);
};

// PUT /students/:id
// სტუდენტის grade და role განახლება
const updateStudent = (req, res) => {
    const student = students.find(
        (s) => s.id === Number(req.params.id)
    );

    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }

    student.grade = req.body.grade;
    student.role = req.body.role;

    res.json(student);
};

// DELETE /students/:id
// სტუდენტის წაშლა
const deleteStudent = (req, res) => {
    students = students.filter(
        (s) => s.id !== Number(req.params.id)
    );

    res.json({ message: "Student deleted" });
};

module.exports = {
    getStudents,
    addStudent,
    updateStudent,
    deleteStudent
};
