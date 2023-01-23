const conDB = require('../conDB.js');
const chaparia = require('../models/entregadores.js');

const entregadores = (req, res) => {
    conDB.query(chaparia.getEntregadores(), (err, result) => {
        if(err == null){
            res.status(200).json(result).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

module.exports = {
    entregadores
}