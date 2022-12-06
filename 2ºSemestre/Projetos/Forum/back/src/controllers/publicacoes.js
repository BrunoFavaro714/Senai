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

const postPublic = (req, res) => {
    conDB.query(publicacoes.postPublicacoes(req.body), (err, result) => {
        if (err == null){
            res.status(201).json(result).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

const delPublic = (req, res) => {
    conDB.query(publicacoes.delPublicacoes(req.body) , (err, result) => {
        if (err == null){
            res.status(200).json(result).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

module.exports = {
    getPublic,
    postPublic,
    delPublic
}