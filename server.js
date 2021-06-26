const mysql = require('mysql');
const pass = require('./config.js');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: pass,
    database: 'employeeDB',
});

module.exports = connection;