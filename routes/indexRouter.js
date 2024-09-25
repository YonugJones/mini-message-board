const { Router } = require('express');
const indexRouter = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
]

indexRouter.get('/', (req, res) => {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

indexRouter.post('/new', (req, res) => {
  messages.push({ text: req.body.messageText, user: req.body.messageName, added: new Date() });
  res.redirect('/');
});

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