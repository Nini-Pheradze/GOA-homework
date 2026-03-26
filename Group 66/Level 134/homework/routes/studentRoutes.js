const express = require('express');
const router = express.Router();
let students = require('../data/students');


// students reading and filtering by their grades
router.get('/', (req, res) => {
    const { grade } = req.query;
// if query exists
    if (grade) {
        const filteredStudents = students.filter(s => s.grade === parseInt(grade));
        return res.json(filteredStudents);
    };
// if query doesn't exist
    res.json(students);
});


// creating new student 
router.post('/', (req, res) => {
    const { name, grade, role } = req.body;

    // data for new student
    const newStudent = {
        id: students.length + 1,
        name,
        grade,
        role
    };

    students.push(newStudent);
    res.status(201).json({ message: "Student added", student: newStudent});
});


// updating students data especially grade and role
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { grade, role } = req.body;

    const student = students.find(s => s.id = id);

    if (student) {
        if (grade !== undefined) student.grade = grade;
        if (role !== undefined) student.role = role;
        res.json({ message: 'Data is updated!', student});
    } else {
        res.status(404).json({message: "Student has not been found!"});
    }
});
