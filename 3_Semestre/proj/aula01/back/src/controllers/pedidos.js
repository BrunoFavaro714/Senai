const conDB = require('../conDB.js');
const chaparia = require('../models/pedidos.js');

const pedidos = (req, res) => {
    conDB.query(chaparia.getPedidos(), (err, result) => {
        if(err == null){
            res.status(200).json(result).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

module.exports = {
    pedidos
}