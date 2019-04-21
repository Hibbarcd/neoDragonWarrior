var mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'RazorRazor9',
    database: 'Character_POS_DB',
  });

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});