#! /usr/bin/env node
require('dotenv').config();
const { Client } = require('pg');

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  text VARCHAR ( 255 ),
  username VARCHAR ( 255 ),
  added DATE
);

INSERT INTO messages (text, username, added)
VALUES 
  ('Hi there!', 'Amando', '2024-10-08'),
  ('Hello World!', 'Charles', '2024-10-09')
;`

async function main() {
  try {
    console.log('Seeding...');
    const client = new Client({
      connectionString: `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log('done');
  } catch(err) {
    console.error('Error during seeding:', err)
  }
}

main();