const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'onibus'
});

app.get('/onibus/horarios', (req, res) => {
    let string ='select * from horarios;';
    con.query(string, (error, result) => {
        if(error == null){
            res.json(result);
        }
    });
});

app.get('/onibus/linhas', (req, res) => {
    let string ='select * from linhas;';
    con.query(string, (error, result) => {
        if(error == null){
            res.json(result);
        }
    });
});

app.get('/onibus/vw_motorista', (req, res) => {
    let string ='select * from vw_motorista;';
    con.query(string, (error, result) => {
        if(error == null){
            res.json(result);
        }
    });
});

app.get('/onibus/mot_linhas', (req, res) => {
    let string ='select * from mot_linhas;';
    con.query(string, (error, result) => {
        if(error == null){
            res.json(result);
        }
    });
});

app.listen(5500, () => {
    console.log('listening')
});