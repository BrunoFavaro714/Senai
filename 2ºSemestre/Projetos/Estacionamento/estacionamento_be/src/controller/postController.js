const conDB = require('../conDB');
const estacionamento = require('../model/postModel.js');

const cadastro = (req, res) => {
    conDB.query(estacionamento.postCadastro(req.body), (err, result) => {
        if (err == null) {
            res.status(201).json(req.body).end();
        }else{  
            res.status(400).json(err).end();
        }
    })
}

const vaga = (req, res) => {
    conDB.query(estacionamento.postVaga(req.body), (err, result) => {
        if(err == null){
            res.status(201).json(req.body).end();
        }else{
            res.status(400).json(err).end();    
        }
    })
}

module.exports = {
    cadastro,
    vaga
}