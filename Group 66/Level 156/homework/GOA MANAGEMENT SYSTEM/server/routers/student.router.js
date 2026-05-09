const express = require('express');
const { getStudents, addStudent, deleteStudent } = require('../controllers/student.controller');

const studentRouter = express.Router();


studentRouter.get('/', getStudents);
studentRouter.post('/', addStudent);
studentRouter.delete('/:id', deleteStudent);

module.exports = studentRouter;