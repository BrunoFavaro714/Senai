const conDB = require('../conDB.js');
const estacionamento = require('../model/getModel.js');

const vw_completa = (req, res) => {
    conDB.query(estacionamento.getVw_completa(), (err, result) => {
        if (err == null){
            res.status(200).json(result).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

const vagas = (req, res) => {
    conDB.query(estacionamento.getVagas(), (err, result) => {
        if (err == null){
            res.status(200).json(result).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

const relatorio = (req, res) => {
    conDB.query(estacionamento.getRelatorio(), (err, result) => {
        if (err == null){
            res.status(200).json(result).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

module.exports = {
    vw_completa,
    vagas,
    relatorio
}