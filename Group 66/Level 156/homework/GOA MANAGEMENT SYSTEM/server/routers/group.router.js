const express = require('express');
const { getGroups, addGroup, deleteGroup } = require('../controllers/group.controller');

const groupRouter = express.Router();


groupRouter.get('/', getGroups);
groupRouter.post('/', addGroup);
groupRouter.delete('/:id', deleteGroup);

module.exports = groupRouter;