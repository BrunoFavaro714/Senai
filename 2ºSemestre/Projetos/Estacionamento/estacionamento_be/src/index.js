const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
app.use(express.json());
app.use(cors());

const conDB = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'estacionamento'
});

app.get('/estacionamento/clientes', (req, res) => {
    let query = `SELECT * FROM clientes`;

    conDB.query(query, (err, result) => {
        if(err == null){
            res.status(200).json(result).end()
        }else {
            res.status(400).json(err).end();
        }
    })
});

app.get('/estacionamento/veiculos', (req, res) => {
    let query = `SELECT * FROM veiculos`;

    conDB.query(query, (err, result) => {
        if(err == null){
            res.status(200).json(result).end()
        }else {
            res.status(400).json(err).end();
        }
    })
});

app.get('/estacionamento/vagas', (req, res) => {
    let query = `SELECT * FROM vagas`;

    conDB.query(query, (err, result) => {
        if(err == null){
            res.status(200).json(result).end()
        }else {
            res.status(400).json(err).end();
        }
    })
});

app.get('/estacionamento/controle', (req, res) => {
    let query = `SELECT * FROM controle`;

    conDB.query(query, (err, result) => {
        if(err == null){
            res.status(200).json(result).end()
        }else {
            res.status(400).json(err).end();
        }
    })
});

app.listen(3000, () => {
    console.log('ok');
});