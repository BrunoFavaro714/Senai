const conDB = require('../conDB.js');
const solicitacoes = require('../models/postModel.js');

const produto = (req, res) => {
    conDB.query(solicitacoes.postProduto(req.body), (err, result) => {
        if(err == null){
            res.status(201).json(req.body).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

const depart = (req, res) => {
    conDB.query(solicitacoes.postDepart(req.body), (err, result) => {
        if(err == null){
            res.status(201).json(req.body).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

const solic = (req, res) => {
    conDB.query(solicitacoes.postSolic(req.body), (err, result) => {
        if(err == null){
            res.status(201).json(req.body).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

module.exports = {
    produto,
    depart,
    solic
}