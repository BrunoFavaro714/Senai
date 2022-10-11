const conDB = require('../DAO/conDB.js');
const clientes = require('../model/clientesModel.js');

const clientesListar = (req, res) => {
    conDB.query(clientes.toReadAll(), (err, result) => {
        if (err == null) {
            res.status(200).json(result).end()
        }else {
            res.status(400).json(err).end();
        }
    })
}

const clienteListar = (req, res) => {
    conDB.query(clientes.toRead(req.params), (err, result) => {
        if (err == null) {
            res.status(200).json(result).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

const clienteCadastrar = (req, res) => {
    conDB.query(clientes.toCreate(req.body), (err, result) => {
        if (err == null) {
            res.status(201).json(req.body).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

module.exports = {
    clientesListar,
    clienteListar,
    clienteCadastrar
}