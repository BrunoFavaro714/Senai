const conDB = require('../DAO/conDB.js');
const vagas = require('../model/vagasModel.js');

const vagasListar = (req, res) => {
    conDB.query(vagas.toReadAll(), (err, results) => {
        if (err == null) {
            res.status(200).json(result).end()
        }else {
            res.status(400).json(err).end();
        }
    })
}

const vagaListar = (req, res) => {
    conDB.query(vagas.toRead(req.params), (err, results) => {
        if (err == null) {
            res.status(200).json(result).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

const vagaCadastrar = (req, res) => {
    conDB.query(vagas.toCreate(req.body), (err, result) => {
        if (err == null) {
            res.status(201).json(req.body).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

module.exports = {
    vagasListar,
    vagaListar,
    vagaCadastrar
}