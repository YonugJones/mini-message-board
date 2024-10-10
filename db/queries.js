const pool = require('./pool');

async function getMessagesQuery() {
  console.log('running queries getMessagesQuery')
  const { rows } = await pool.query('SELECT * FROM messages');
  return rows;
};

async function addMessageQuery(text, username) {
  console.log('running queries addMessageQuery');
  const added = new Date().toISOString();
  await pool.query('INSERT INTO messages (text, username, added) VALUES ($1, $2, $3)', [text, username, added]);
  console.log('Message inserted succesfully');
}

module.exports = {
  getMessagesQuery,
  addMessageQuery
}