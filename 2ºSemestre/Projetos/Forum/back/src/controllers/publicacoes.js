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

const getVwzinha = (req, res) => {
    conDB.query(publicacoes.getVwzinha(), (err, result) => {
        if(err == null){
            res.status(200).json(result).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

const getPubli_image = (req, res) => {
    conDB.query(publicacoes.getPubli_image(req.params), (err, result) => {
        if(err == null){
            console.log(result);
            res.status(200).json(publicacoes.toAscii(result)).end();
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
    getPubli_image,
    postPublic,
    delPublic,
    getVwzinha
}