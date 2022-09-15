const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
app.use(express.json());
app.use(cors());

const conDB = mysql.createConnection({
    user:'root',
    host: 'localhost',
    database:'locadora'
});

app.get('/locadora/clientes', (req, res) => {
    let query = 'select * from clientes'

    conDB.query(query, (err, rest) => {
        if (err == null) {
            res.status(200).json(rest).end();
        }else{
            res.status(400).json(err).end();
        }
    })
});

app.get('/locadora/filmes', (req, res) => {
    let query = 'select * from filmes'

    conDB.query(query, (err, rest) => {
        if (err == null) {
            res.status(200).json(rest).end();
        }else{
            res.status(400).json(err).end();
        }
    })
});

app.get('/locadora/locacoes', (req, res) => {
    let query = 'select * from locacoes'

    conDB.query(query, (err, rest) => {
        if (err == null) {
            res.status(200).json(rest).end();
        }else{
            res.status(400).json(err).end();
        }
    })
});

app.listen(3000, () => {
    console.log('listening');
});