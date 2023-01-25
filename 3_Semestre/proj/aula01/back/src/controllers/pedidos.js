const conDB = require('../conDB.js');
const chaparia = require('../models/pedidos.js');

const getPedidos = (req, res) => {
    conDB.query(chaparia.getPedidos(), (err, result) => {
        if(err == null){
            res.status(200).json(result).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

const postPedidos = (req, res) => {
    conDB.query(chaparia.postPedidos(req.body), (err, result) => {
        if(err == null){
            res.status(200).json(result).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

const putPedidos = (req, res) => {
    conDB.query(chaparia.putPedidos(req.body), (err, result) => {
        if(err == null){
            res.status(200).json(result).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

const delPedidos = (req, res) => {
    conDB.query(chaparia.delPedidos(req.params), (err, result) => {
        if(err == null){
            res.status(200).json(result).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

module.exports = {
    getPedidos,
    postPedidos,
    putPedidos,
    delPedidos
}