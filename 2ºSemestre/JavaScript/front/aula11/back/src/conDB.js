const mysql = require('mysql');

const conBD = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'solicitacoes'
});

module.exports = conBD;