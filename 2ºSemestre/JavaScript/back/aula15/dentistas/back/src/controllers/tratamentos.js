const conDB = require('../conDB.js');
const dentista = require('../models/tratamentos.js');

const getTratamentos = (req, res) => {
    conDB.query(dentista.getTratamentos(), (err, result) => {
        if(err == null){
            res.status(200).json(result).end();
        }else{
            res.status(400).json(result).end();
        }
    })
}

const postTratamentos = (req, res) => {
    conDB.query(dentista.postTratamentos(req.body), (err, result) => {
        if(err == null){
            res.status(201).json(result).end();
        }else{
            res.status(400).json(result).end();
        }
    })
}

const putTratamentos = (req, res) => {
    conDB.query(dentista.putTratamentos(req.body), (err, result) => {
        if(err == null){
            res.status(200).json(result).end();
        }else{
            res.status(400).json(result).end();
        }
    })
}

const deleteTratamentos = (req, res) => {
    conDB.query(dentista.deleteTratamentos(req,params), (err, result) => {
        if(err == null){
            res.status(200).json(result).end();
        }else{
            res.status(400).json(result).end();
        }
    })
}

module.exports = {
    getTratamentos,
    postTratamentos,
    putTratamentos,
    deleteTratamentos
}