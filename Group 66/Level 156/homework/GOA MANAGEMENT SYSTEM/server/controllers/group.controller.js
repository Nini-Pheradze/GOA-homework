const Group = require('../models/group.model');

const getGroups = async (req, res) => {
    try {
        const groups = await Group.find();

        res.status(200).json({
            status: "Success",
            message: "Returned group array!",
            length: groups.length,
            data: {
                groups
            }
        });
    } catch (err) {
        console.log(err);
    }
};


const addGroup = async (req, res) => {
    try {
        const { number, type, mentor } = req.body;
        const group = await Group.create({number, type, mentor});
        res.status(201).json({
            status: "success",
            message: "Group created successfully!",
            data: {
                group
            }
        });
    } catch (err) {
        console.log(err);
    }
};


const deleteGroup = async (req, res) => {
    try {
        const { id } = req.params;
        const Group = await Group.findByIdAndDelete(id);

        if (!group) {
            return res.status(400).json({
                status: "Failed!",
                message: "Group cant be found to delete!"
            })
        }

        res.status(200).send({
            status: "Success",
            message: "Group deleted!"
        });
    } catch (err) {
        console.log(err);
    }
};


module.exports = { addGroup, getGroups, deleteGroup };