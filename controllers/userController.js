const db = require('../db/queries');

async function getMessages(req, res) {
  try {
    const messages = await db.getMessagesQuery();
    res.render('index', { title: 'Mini Message Board', messages })
  } catch(err) {
    console.error('Error fetching data:', err);
    res.status(500).send('Internal server error');
  }
}

async function addMessage(req, res) {
  try {
    const { text, username } = req.body;
    await db.addMessageQuery(text, username);
    res.redirect('/');
  } catch(err) {
    console.error('Error adding message:', err);
    res.status(500).send('Internal server error');
  }
}

module.exports = {
  getMessages,
  addMessage
}