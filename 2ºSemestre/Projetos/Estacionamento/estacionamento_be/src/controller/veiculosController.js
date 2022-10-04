const conDB = require('../DAO/conDB.js');
const veiculos = require('../model/veiculosModel.js');

const veiculosListar = (req, res) => {
    conDB.query(veiculos.toReadAll(), (err, results) => {
        if (err == null) {
            res.status(200).json(result).end()
        }else {
            res.status(400).json(err).end();
        }
    })
}

const veiculoListar = (req, res) => {
    conDB.query(veiculos.toRead(req.params), (err, result) => {
        if (err == null) {
            res.status(200).json(result).end()
        }else {
            res.status(400).json(err).end();
        }
    })
}

const veiculoCadastrar = (req, res) => {
    conDB.query(veiculos.toCreate(req.body), (err, result) => {
        if (err == null) {
            res.status(201).json(req.body).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

module.exports = {
    veiculosListar,
    veiculoListar,
    veiculoCadastrar
}