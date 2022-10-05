const conDB = require('../DAO/conDB.js');
const solicitacoes = require('../model/solicitaModel.js');

const solicitacoesListar = (req, res) => {
    conDB.query(solicitacoes.toReadAll(), (err, results) => {
        if (err == null) {
            res.status(200).json(results).end()
        }else {
            res.status(400).json(err).end();
        }
    });
}

const solicitacaoListar = (req, res) => {
    conDB.query(solicitacoes.toRead(req.params), (err, results) => {
        if (err == null) {
            res.status(200).json(results).end();
        }else{
            res.status(400).json(err).end();
        }
    });
}

const solicitacaoCadastrar = (req, res) => {
    conDB.query(solicitacoes.toCreate(req.body), (err, results) => {
        if (err == null) {
            if(results[1].affectedRows == 0){
                res.status(400).json(results).end();
            }else{
                res.status(201).json(req.body).end();
            }
        }else{  
            res.status(400).json(err).end();
        }
    });
}

module.exports = {
    solicitacoesListar,
    solicitacaoListar,
    solicitacaoCadastrar
}