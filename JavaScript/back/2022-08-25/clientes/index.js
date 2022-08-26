const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'clientes'
});

app.get('/clientes', (req, res) => {
    let string = "select * from vw_clientes;";
    con.query(string, (error, result) => {
        if(error == null){
            res.json(result);
        }
    });
});

app.listen(5500, () => {
    console.log("listening");
});