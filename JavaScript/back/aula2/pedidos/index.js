const express = require('express');
const app = express();
const mysql = require('mysql');

const con = mysql.createConnection({
    user : 'root',
    host : 'localhost',
    database : 'pedidos'
});

app.use(express.json());

app.get('/pedidos', (req, res) =>{
    let nome = req.query.priNome
    let sobrenome = req.query.sobrenome
    let endereco = req.query.endereco
    let telefones = req.query.telefones

    let cliente = `insert into clientes value(null,'${nome}','${sobrenome}','${endereco}')`
    // let clienteTel = `insert into telefones value(${},'${telefones}')`

    con.query(cliente, (err, result) => {
        if(err == null) {
            res.json("Dados recebidos com sucesso e enviados para nosso Banco de Dados");
            console.log(result.insertId);
        }else{
            res.json("Dados recebidos com sucesso, porém não enviar para nosso Banco de Dados");
        }
    });
    // con.query(clienteTel, (err, result) => {
    //     if(err == null) {
    //         res.json("Dados recebidos com sucesso e enviados para nosso Banco de Dados");
    //     }else{
    //         res.json("Dados recebidos com sucesso, porém não enviar para nosso Banco de Dados");
    //     }
    // });
});

app.listen(3000, () => {
    console.log("listening");
});