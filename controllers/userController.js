const db = require('../db/queries');

async function getMessages(req, res) {
  try {
    const messages = await db.getAllMessages();
    console.log('Messages: ', messages)
    res.render('index', { title: 'Mini Message Board', messages })
  } catch(err) {
    console.error('Error fetching data:', err);
    res.status(500).send('Internal server error');
  }
}

module.exports = {
  getMessages
}