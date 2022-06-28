const mysql = require('mysql2');

//connect to database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'morton',
  password: '123456',
  database: 'assignment',
});

db.connect(err => {
  if (err) throw err;
  console.log('MySQL database connected.');
});

function queryHandler(sql) {
  return new Promise((resolve, reject) => {
    db.query(sql, (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
}

module.exports = queryHandler;
