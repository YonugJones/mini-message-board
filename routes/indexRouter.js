const { Router } = require('express');
const { getMessages, deleteMessage } = require('../controllers/userController')
const indexRouter = Router();

indexRouter.get('/', getMessages);
indexRouter.post('/delete', deleteMessage);

module.exports = indexRouter;