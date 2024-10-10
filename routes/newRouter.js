const { Router } = require('express');
const { addMessage } = require('../controllers/userController')
const newRouter = Router();

newRouter.get('/', (req, res) => {
  res.render('form');
});

newRouter.post('/', (req, res) => {
  addMessage(req, res);
})

module.exports = newRouter;