const conDB = require('../conDB.js');
const solicitacoes = require('../models/solicitacoesModel.js');

const cadProd = (req, res) => {
    conDB.query(solicitacoes.toCreateIn(req.body.table, req.body.content), (err, result) => {
        if (err == null) {
            res.status(201).json(result).json(req.body).end();
        }else {
            res.status(400).json(err).end();
        }
    })
}

const listProd = (req, res) => {
    conDB.query(solicitacoes.toReadAllFrom(req.body.table), (err, result) => {
        if (err == null) {
            res.status(200).json(result).end()
        }else {
            res.status(400).json(err).end();
        }
    })
}

const cadDepart = (req, res) => {
    conDB.query(solicitacoes.toCreateIn(req.body.table, req.body.content), (err, result) => {
        if (err == null) {
            res.status(201).json(result).json(req.body).end();
        }else {
            res.status(400).json(err).end();
        }
    })
}

const deletDepart = (req, res) => {
    conDB.query(solicitacoes.toDeleteFromBy(req.body.table, req.body.where), (err, result) => {
        if(err == null){
            res.status(200).json(result).end();
        }else {
            res.status(400).json(err).end();
        }
    })
}

const cadSoli = (req, res) => {
    conDB.query(solicitacoes.toCreateByProc(req.body), (err, result) => {
        if (err == null) {
            res.status(201).json(result).json(req.body).end();
        }else {
            res.status(400).json(err).end();
        }
    })
}

const viewSoli = (req, res) => {
    conDB.query(solicitacoes.toReadAllFrom(req.body.table), (err, result) => {
        if (err == null) {
            res.status(200).json(result).end()
        }else {
            res.status(400).json(err).end();
        }
    })
}

const listDepart = (req, res) => {
    conDB.query(solicitacoes.toReadAllFrom(req.body.table), (err, result) => {
        if(err == null){
            res.status(200).json(result).end();
        }else {
            res.status(400).json(err).end();
        }
    })
}

const listSoliData = (req, res) => {
    conDB.query(solicitacoes.toReadFromLike(req.body.table, req.body.where), (err, result) => {
        if(err == null){
            res.status(200).json(result).end();
        }else {
            res.status(400).json(err).end();
        }
    })
}

const listFuncSolis = (req, res) => {
    conDB.query(solicitacoes.toReadAllFrom(req.body.table), (err, result) => {
        if(err == null){
            res.status(200).json(result).end();
        }else {
            res.status(400).json(err).end();
        }
    })
}

module.exports = {
    viewSoli,
    listProd,
    listDepart,
    listSoliData,
    listFuncSolis,
    cadProd,
    cadDepart,
    cadSoli,
    deletDepart,
}