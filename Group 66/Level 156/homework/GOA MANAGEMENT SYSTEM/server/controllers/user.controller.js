const User = require('../models/user.model');

const getUsers = async (req, res) => {
    try {
        const users = await User.find();

        res.status(200).json({
            status: "success",
            message: "Returned users array!",
            length: users.length,
            data: {
                users
            }
        });
    } catch (err) {
        console.log(err);
    }
};

const addUser = async (req, res) => {
    try {
        const { fullname, email, password, facebook, role } = req.body;

        const user = await User.create({fullname, email, facebook, password, role});
        res.status(201).json({
            status: "success",
            message: "User creatred successfully!",
            data: {
                user
            }
        });
    } catch (err) {
        console.log(err);
    }
};

const deleteUser = async (req, res) => {
    try{
        const { id } = req.params;

        const user = await USer.findByIdAndDelete(id);

        if (!user) {
            return res.status(404).json({
                status: "failed",
                message: "User cant be found to delete!"
            });
        }

        res.status(200).send({
            status: "success",
            message: "User deleteed!"
        });
    } catch (err) {
        console.log(err);
    }
};

module.exports = { getUsers, addUser, deleteUser };