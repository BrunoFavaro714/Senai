const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
app.use(cors());

const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'academia'
});

app.get('/academia/alunos', (req, res) => {
    let string = "select * from vw_alunos;";
    con.query(string, (error, result) => {
        if(error == null){
            res.json(result);
        }
    });
});

app.get('/academia/aparelhos', (req, res) => {
    let string = "select * from aparelhos;";
    con.query(string, (error, result) => {
        if(error == null){
            res.json(result);
        }
    });
});

app.get('/academia/exercicios', (req, res) => {
    let string = "select * from exercicios;";
    con.query(string, (error, result) => {
        if(error == null){
            res.json(result);
        }
    });
});

app.get('/academia/fichas', (req, res) => {
    let string = "select * from ficha;";
    con.query(string, (error, result) => {
        if(error == null){
            res.json(result);
        }
    });
});

app.listen(5500, () => {
    console.log("listening");
});