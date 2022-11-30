const conDB = require('../conDB');
const cursos = require('../models/cursos');

const getCursos = (req, res) => {
    conDB.query(cursos.getCursos(), (err, result) => {
        if(err == null || err === undefined) {
            res.status(200).json(result).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

const postCurso = (req, res) => {
    conDB.query(cursos.postCurso(req.body), (err, result) => {
        if(err == null || err === undefined) {
            res.status(201).json(result).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

const delCurso = (req, res) => {
    conDB.query(cursos.delCurso(req.params), (err, result) => {
        if(err == null || err === undefined) {
            res.status(200).json(result).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

module.exports = {
    getCursos,
    postCurso,
    delCurso
}