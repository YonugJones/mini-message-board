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
};

async function deleteMessageQuery(id) {
  console.log('running queries deleteMessageQuery');
  await pool.query('DELETE FROM messages WHERE id = $1', [id]);
  console.log(`Message with ID ${id} deleted successfully`);
};

module.exports = {
  getMessagesQuery,
  addMessageQuery,
  deleteMessageQuery
}