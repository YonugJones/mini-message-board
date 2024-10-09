const { Router } = require('express');
const userController = require('../controllers/userController')
const indexRouter = Router();

indexRouter.get('/', userController.getMessages);

indexRouter.post('/new', (req, res) => {
  messages.push({ text: req.body.messageText, user: req.body.messageName, added: new Date() });
  res.redirect('/');
});

// redirect /message to /new
indexRouter.get('/message', (req, res) => {
  res.redirect('/new');
})

indexRouter.get('/message/:id', (req, res) => {
  const messageId = parseInt(req.params.id, 10);

  if (messageId >= 0 && messageId < messages.length) {
    const message = messages[messageId];
    res.render('messageDetail', { message });
  } else {
    res.status(404).send('Message not found');
  }
})

module.exports = indexRouter;