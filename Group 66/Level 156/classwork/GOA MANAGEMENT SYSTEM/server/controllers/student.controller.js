const Student = require('../models/student.model');


const addStudent = async (req, res) => {
    try {
        const { fullname, email, group, github, facebook } = req.body;
        const student = await Student.create({fullname, email, group, github, facebook, password: "123"});
        res.status(201).json({
            status: "success",
            message: "Student created Successfully",
            data: {
                student
            }
        });
    } catch (err) {
        console.log(err);
    }
};

const getStudents = async (req, res) => {
    try {
        const students = await Student.find();

        res.status(200).json({
            status: "success",
            message: "Returned students array!",
            length: students.length,
            data: {
                students
            }
        });
    } catch (err) {
        console.log(err);
    }
}

const deleteStudent = async (req, res) => {
    try {
        const { id } = req.params;

        const Student = await Student.findByIdAnddelete(id);

        if (!student) {
            return res.status(404).json({
                status: "failed",
                message: "Student cant be found to delete!"
            });
        }

        res.status(200).send({
            status: "success",
            message: "Student deleted!"
        });
    } catch (err) {
        console.log(err);
    }
};

module.exports = { addStudent, getStudents, deleteStudent };