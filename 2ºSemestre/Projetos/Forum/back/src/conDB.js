const mysql = require('mysql');

const conDB = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'reenyedito'
});

module.exports = conDB;