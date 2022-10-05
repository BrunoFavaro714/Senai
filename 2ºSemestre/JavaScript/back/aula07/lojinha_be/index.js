const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
app.use(express.json());
app.use(cors());

const conDB = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'livrocaixa'
});

app.get('/livrocaixa/lancamentos', (req, res) => {
    let query = 'SELECT * FROM lancamentos';

    conDB.query(query, (err, result) => {
        if(err == null){
            res.status(200).json(result).end()
        }else {
            res.status(400).json(err).end();
        }
    })
});

app.get('/livrocaixa/lancamentos/:data', (req, res) => {
    let query = `SELECT * FROM lancamentos WHERE data = '${req.params['data']}'`;

    conDB.query(query, (err, result) => {
        if(err == null){
            res.status(200).json(result).end();
        }else {
            res.status(400).json(err).end();
        }
    });
});

app.post('/livrocaixa/lancamentos', (req, res) => {
    let query = `INSERT INTO lancamentos VALUES (DEFAULT, '${req.body.data}', '${req.body.desc}', ${req.body.valor}, '${req.body.tipo}')`

    conDB.query(query, (err, result) => {
        if(err == null) {
            res.status(201).json(req.body).end();
        }else {
            res.status(400).json(err).end();
        }
    });
});

app.listen(3000, () => {
    console.log('listening');
});