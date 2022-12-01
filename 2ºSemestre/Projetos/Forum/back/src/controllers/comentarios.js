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

module.exports = {
    getComentarios
}