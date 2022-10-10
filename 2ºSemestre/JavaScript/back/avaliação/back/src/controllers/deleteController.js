const conDB = require('../conDB.js');
const solicitacoes = require('../models/deleteModel.js');

const depart = (req, res) => {
    conDB.query(solicitacoes.deleteDepart(req.params), (err, result) => {
        if (err == null){
            res.status(200).json(result).end();
        }else{
            res.status(400).json(err).end()
        }
    })
}

module.exports = {
    depart
}