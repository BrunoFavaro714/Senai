const conDB = require('../conDB');
const cursados = require('../models/cursados');

const getCursados = (req, res) => {
    conDB.query(cursados.getCursados(), (err, result) => {
        if(err == null || err === undefined) {
            res.status(200).json(result).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

const getCursadosFilt = (req, res) => {
    conDB.query(cursados.getCursadosFilt(req.params), (err, result) => {
        if(err == null || err === undefined) {
            res.status(200).json(result).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

const postCursados = (req, res) => {
    conDB.query(cursados.postCursados(req.body), (err, result) => {
        if(err == null || err === undefined) {
            res.status(201).json(result).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

module.exports = {
    getCursados,
    getCursadosFilt,
    postCursados
}