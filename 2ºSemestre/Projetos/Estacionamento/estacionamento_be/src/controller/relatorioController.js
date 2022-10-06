const conDB = require('../DAO/conDB.js');
const relatorio = require('../model/relatorioModel.js');

const relatorioListar = (req, res) => {
    conDB.query(relatorio.toReadAll(), (err, result) => {
        if (err == null) {
            res.status(200).json(result).end()
        }else {
            res.status(400).json(err).end();
        }
    })
}

const  relatorioListarUm = (req, res) => {
    conDB.query(relatorio.toRead(req.params), (err, result) => {
        if (err == null) {
            res.status(200).json(result).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

const relatorioCadastrar = (req, res) => {
    conDB.query(relatorio.toCreate(req.body), (err, result) => {
        if (err == null) {
            res.status(201).json(req.body).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

const relatorioAtualizar = (req, res) => {
    conDB.query(relatorio.toUpdate(req.body), (err, result) => {
        if (err == null) {
            res.status(201).json(req.body).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

module.exports = {
    relatorioListar,
    relatorioListarUm,
    relatorioCadastrar,
    relatorioAtualizar
}