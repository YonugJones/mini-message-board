const pool = require('./pool');

async function getAllMessages() {
  console.log('running queries getAll Messages')
  const { rows } = await pool.query('SELECT * FROM messages');
  return rows;
};

module.exports = {
  getAllMessages
}