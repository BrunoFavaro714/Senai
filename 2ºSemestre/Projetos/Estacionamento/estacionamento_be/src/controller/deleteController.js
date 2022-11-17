const conDB = require('../conDB');
const estacionamento = require('../model/deleteModel.js');

const cadastro = (req, res) => {
    conDB.query(estacionamento.deleteCadastro(req.body), (err, result) => { 
        console.log(req.body);   
        if (err == null) {
            res.status(200).json(result).end();
        }else{  
            res.status(400).json(err).end();
        }
    })
}

const vaga = (req, res) => {
    conDB.query(estacionamento.deleteVaga(req.body), (err, result) => {
        if(err == null){
            res.status(200).json(result).end();
        }else{
            res.status(400).json(err).end();    
        }
    })
}

module.exports = {
    cadastro,
    vaga
}