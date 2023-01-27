const conDB = require('../conDB.js');
const tarefas = require('../models/tarefas.js');

const getTarefas = (req, res) => {
    conDB.query(tarefas.getTarefas(), (err, result) => {
        if(err == null) {
            res.status(200).json(result).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

const getTarefasAbertas = (req, res) => {
    conDB.query(tarefas.getTarefasAbertas(), (err, result) => {
        if(err == null) {
            res.status(200).json(result).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

const getTarefasFinalis = (req, res) => {
    conDB.query(tarefas.getTarefasFinalis(), (err, result) => {
        if(err == null) {
            res.status(200).json(result).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

const getTarefasCancel = (req, res) => {
    conDB.query(tarefas.getTarefasCancel(), (err, result) => {
        if(err == null) {
            res.status(200).json(result).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

const postTarefas = (req, res) => {
    conDB.query(tarefas.postTarefas(req.body), (err, result) => {
        if(err == null) {
            res.status(201).json(result).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

const putTarefasFinalis = (req, res) => {
    conDB.query(tarefas.putTarefasFinalis(req.params), (err, result) => {
        if(err == null){
            res.status(200).json(result).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

const putTarefasCancel = (req, res) => {
    conDB.query(tarefas.putTarefasCancel(req.params), (err, result) => {
        if(err == null){
            res.status(200).json(result).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

module.exports = {
    getTarefas,
    getTarefasAbertas,
    getTarefasFinalis,
    getTarefasCancel,
    postTarefas,
    putTarefasFinalis,
    putTarefasCancel
}