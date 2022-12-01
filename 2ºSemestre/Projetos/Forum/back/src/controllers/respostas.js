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

const postRespostas = (req, res) => {
    conDB.query(respostas.postRespostas(req.body), (err, result) => {
        if (err == null || err === undefined){
            res.status(201).json(result).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

const delRespostas = (req, res) => {
    conDB.query(respostas.delRespostas(req.params), (err, result) => {
        if (err == null || err === undefined){
            res.status(200).json(result).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

module.exports = {
    getRespostas,
    postRespostas,
    delRespostas
}