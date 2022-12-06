const conDB = require('../conDB.js');
const comentarios = require('../models/comentarios.js');

const getComentarios = (req, res) => {
    conDB.query(comentarios.getComentarios(), (err, result) => {
        if(err == null){
            res.status(200).json(result).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

const postCometarios = (req, res) => {
    conDB.query(comentarios.postCometarios(req.body), (err, result) => {
        if (err == null){
            res.status(201).json(result).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

const delComentarios = (req, res) => {
    conDB.query(comentarios.delComentarios(req.body), (err, result) => {
        if (err == null){
            res.status(200).json(result).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

module.exports = {
    getComentarios,
    postCometarios,
    delComentarios
}