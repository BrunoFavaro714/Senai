const express = require('express'); 
const mysql = require('mysql'); 
const bodyParser = require('body-parser'); 
const cors = require('cors');

const app = express();


const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'pedidos'
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.post('/clientes', (req, res) => {
    let priNome = req.body.priNome;
    let sobrenome = req.body.sobrenome;
    let endereco = req.body.endereco;
    let telefones = req.body.telefones.split("\r\n");
    let string = `insert into clientes value(null,'${priNome}','${sobrenome}','${endereco}')`;
    let resposta = {
        dados:"Dados recebidos com sucesso"
    };
    
    con.query(string, (err, result) => {
        if (err == null) {
            resposta.cliente = "Dados do cliente enviados com sucesso ao BD";
            telefones.forEach((e)=>{
                string = `insert into telefones values(${result.insertId},'${e}')`;
                con.query(string,(err, result)=>{
                    if(err == null){
                        resposta.telefones = "Tefefones enviados com sucesso ao BD";
                    }else{
                        resposta.erroTel = "Erro ao enviar telefones ao BD";
                    }
                });
            });
        } else {
            resposta.erroDB = "Erro ao enviar dados ao Banco de dados";
        }
        res.json(resposta);
    });
});

app.get('/clientes', (req, res) => {
    let string = `Select * from clientes`;
    con.query(string,(err, result)=>{
        if(err == null){
            res.json(result);
        }
    });
});

app.listen(3000, () => {
    console.log("Respondendo na porta 3000");
});