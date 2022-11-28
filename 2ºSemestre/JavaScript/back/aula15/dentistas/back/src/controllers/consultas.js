const conDB = require('../conDB.js');
const dentista = require('../models/consultas.js');

const consultas = (req, res) => {
    conDB.query(dentista.getConsultas(), (err, result) => {
        if(err == null){
            res.status(200).json(result).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

module.exports = {
    consultas
}