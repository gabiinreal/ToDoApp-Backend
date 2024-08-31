const mysql = require('mysql2');

const { HOST, USER, PASSWORD, DATABASE } = process.env // !ENV

module.exports = () => {
    const connection = mysql.createConnection({
        host: HOST,
        user: USER,
        password: PASSWORD !== '=' || '',
        database: DATABASE
      });

    connection.connect((err) => {
      if (err) {
        console.error(err.stack);
        return;
      }
    });

    global.db = connection
}