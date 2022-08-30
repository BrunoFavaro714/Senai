const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const conDB = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'lojinha'
});

const app = express();
app.use(cors());
app.use(express.json());

app.get('/produtos', (req, res) => {
    let query = "select * from produtos";

    conDB.query(query, (error, result) => {
        if(error == null) {
            res.json(result).status(200).end
        }
    });
});

app.get('/produtos/:cod', (req, res) => {
    let query = `select * from produtos where cod = '${req.params.cod}'`

    conDB.query(query, (error, result) => {
        if(error == null) {
            res.status(200).json(result).end();
        }else{
            res.status(400).json(error).end();
        }
    });
});

app.post('/produtos', (req, res) => {
    console.log(req.body);

    let query = `insert into produtos values (default, '${req.body.cod}', '${req.body.nome}', ${req.body.qntd}, ${req.body.preco})`

    conDB.query(query, (error, result) => {
        if(error == null){
            res.status(201).json(req.body).end()
        }else{
            res.status(400).json(error).end;
        }
    });
});

app.listen(3000, () => {
    console.log("listening");
});