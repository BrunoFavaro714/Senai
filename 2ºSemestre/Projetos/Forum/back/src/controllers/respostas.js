const conDB = require('../conDB.js');
const respostas = require('../models/respostas.js');

const getRespostas = (req, res) => {
    conDB.query(respostas.getRespostas(), (err, result) => {
        if(err == null){
            res.status(200).json(result).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

module.exports = {
    getRespostas
}