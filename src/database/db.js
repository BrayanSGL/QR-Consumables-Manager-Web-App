const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'brayansgl',
  database: 'consumables_db'
});

module.exports = db;