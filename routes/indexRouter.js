const { Router } = require('express');
const { getMessages } = require('../controllers/userController')
const indexRouter = Router();

indexRouter.get('/', getMessages);

module.exports = indexRouter;