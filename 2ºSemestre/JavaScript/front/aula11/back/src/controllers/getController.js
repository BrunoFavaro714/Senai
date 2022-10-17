const conDB = require('../conDB.js');
const solicitacoes = require('../models/getModel.js');

const produtos = (req, res) => {
    conDB.query(solicitacoes.getProdutos(), (err, result) => {
        if (err == null){
            res.status(200).json(result).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

const vw_geral = (req, res) => {
    conDB.query(solicitacoes.getVw_geral(), (err, result) => {
        if (err == null){
            res.status(200).json(result).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

const depart = (req, res) => {
    conDB.query(solicitacoes.getDepart(), (err, result) => {
        if (err == null){
            res.status(200).json(result).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

const vw_depart = (req, res) => {
    conDB.query(solicitacoes.getVw_depart(req.params.prod), (err, result) => {
        if (err == null){
            res.status(200).json(result).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

const produtosData = (req, res) => {
    conDB.query(solicitacoes.getProdutosData(req.params.data), (err, result) => {
        if (err == null){
            res.status(200).json(result).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

const vw_func_solic = (req, res) => {
    conDB.query(solicitacoes.getVw_func_solic(), (err, result) => {
        if (err == null){
            res.status(200).json(result).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

module.exports = {
    produtos,
    vw_geral,
    depart,
    vw_depart,
    produtosData,
    vw_func_solic
}