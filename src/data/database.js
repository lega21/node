const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'almacen'
});

mysqlConnection.connect((err) => {
    err ? console.log(err) : console.log('DB is connected');
});

module.exports = mysqlConnection;
