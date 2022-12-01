const conDB = require('../conDB.js');
const categorias = require('../models/categorias.js');

const getCategorias = (req, res) => {
    conDB.query(categorias.getCategorias(), (err, result) => {
        if(err == null){
            res.status(200).json(result).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

const postCategorias = (req, res) => {
    conDB.query(categorias.postCategorias(req.body), (err, result) => {
        if (err == null || err === undefined){
            res.status(201).json(result).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

const delCategorias = (req, res) => {
    conDB.query(categorias.delCategorias(req.params), (err, result) => {
        if (err == null || err === undefined){
            res.status(200).json(result).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

module.exports = {
    getCategorias,
    postCategorias,
    delCategorias
}