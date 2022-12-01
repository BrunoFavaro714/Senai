const conDB = require('../conDB.js');
const publicacoes = require('../models/publicacoes.js');

const getPublic = (req, res) => {
    conDB.query(publicacoes.getPublic(), (err, result) => {
        if(err == null){
            res.status(200).json(result).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

module.exports = {
    getPublic,
}