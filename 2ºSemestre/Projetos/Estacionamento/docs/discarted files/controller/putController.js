const conDB = require('../../../estacionamento_be/src/conDB.js');
const estacionamento = require('../model/putModel.js');

const vagas = (req, res) => {
    conDB.query(estacionamento.putVagas(req.body), (err, result) => {
        if (err == null) {
            res.status(201).json(req.body).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

module.exports = {
    vagas
}