const express = require('express');
const { getUsers, addUser, deleteUser } = require('../controllers/user.controller');

const userRouter = express.Router();

userRouter.get('/', getUsers);
userRouter.post('/', addUser);
userRouter.delete('/:id', deleteUser);

module.exports = userRouter;