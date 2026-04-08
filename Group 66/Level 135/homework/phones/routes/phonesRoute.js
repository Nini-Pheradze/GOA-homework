const express = require('express');
const { getPhones, getPhone, createPhone, deletePhone, updatePhone } = require('../controllers/phonesController');
const { checkBody } = require('../middlewares/phoneMiddleware'); 

const phoneRouter = express.Router();

phoneRouter.get('/', getPhones);
phoneRouter.get('/:id', getPhone);

phoneRouter.post('/', checkBody, createPhone); 

phoneRouter.delete('/:id', deletePhone);
phoneRouter.patch('/:id', updatePhone);

module.exports = phoneRouter;