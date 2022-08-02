const mysql = require('mysql2');


const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: '',
      database: 'employees_db'
    },
);

db.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
    
  });

  module.exports = db;